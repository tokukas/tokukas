import Link from '@mui/material/Link';
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem';
import React from 'react';

export type TPropsMenuItemLink = MenuItemProps<'a'>;

/**
 * The [Link](https://mui.com/material-ui/api/link) variant of the
 * [MenuItem](https://mui.com/material-ui/api/menu-item) component.
 *
 * This component is used to render a menu item that is a link.
 * Usefull inside a [Menu](https://mui.com/material-ui/api/menu) component.
 */
export default function MenuItemLink({
  href, children, ...props
}: TPropsMenuItemLink) {
  return (
    <li tabIndex={-1} role="menuitem">
      <MenuItem
        component={Link}
        href={href}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        {children}
      </MenuItem>
    </li>
  );
}
