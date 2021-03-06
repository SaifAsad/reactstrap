import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, deprecated } from './utils';

const propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  size: PropTypes.string,
  bordered: PropTypes.bool,
  striped: PropTypes.bool,
  inverse: deprecated(PropTypes.bool, 'Please use the prop "dark"'),
  dark: PropTypes.bool,
  hover: PropTypes.bool,
  responsive: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  responsiveTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  tag: 'table',
  responsiveTag: 'div',
};

const Table = (props) => {
  const {
    className,
    cssModule,
    size,
    bordered,
    striped,
    inverse,
    dark,
    hover,
    responsive,
    tag: Tag,
    ...attributes
  } = props;

  let responsiveClassName = false;
  if (responsive) {
    responsiveClassName = responsive === true ? 'table-responsive' : `table-responsive-${responsive}`;
  }

  const classes = mapToCssModules(classNames(
    className,
    'table',
    size ? 'table-' + size : false,
    bordered ? 'table-bordered' : false,
    striped ? 'table-striped' : false,
    (dark || inverse) ? 'table-dark' : false,
    hover ? 'table-hover' : false,
    responsiveClassName
  ), cssModule);

  const table = <Tag {...attributes} className={classes} />;

  return table;
};

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
