import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Search } from '@mui/icons-material';

import PropTypes from 'prop-types';
import {
  SearchBar,
  SerchForm,
  Input,
  SearchBtn,
  SerchFormBtnLabel,
} from './Serchbar.styled';
export default class Searhbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = e => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      toast.error('Please enter something');
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };
  render() {
    return (
      <SearchBar>
        <SerchForm onSubmit={this.handleSubmit}>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images ..."
            name="serchQuery"
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
          <SearchBtn type="submit">
            <SerchFormBtnLabel>
              <Search />
            </SerchFormBtnLabel>
          </SearchBtn>
        </SerchForm>
      </SearchBar>
    );
  }
}
SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
