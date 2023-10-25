import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AddIcon from '@mui/icons-material/Add';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Link from '@mui/material/Link';
export const mainListItems = (
  <React.Fragment>
    <Link style={{ textDecoration: 'none' }} href='/admin/managepackages' underline="none" color='#00C0D9'>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon sx={{ color: '#00C0D9' }} />
        </ListItemIcon>
        <ListItemText primary="Manage Packages" />
      </ListItemButton>
    </Link>
    <Link style={{ textDecoration: 'none' }} href='/admin/manageorders' underline="none" color='#00C0D9'>
      <ListItemButton>
        <ListItemIcon>
          <ShoppingCartIcon sx={{ color: '#00C0D9' }} />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItemButton>
    </Link>
    <Link style={{ textDecoration: 'none' }} href='/admin/addpackages' underline="none" color='#00C0D9'>
    <ListItemButton>
      <ListItemIcon>
        <AddIcon sx={{ color: '#00C0D9' }} />
      </ListItemIcon>
      <ListItemText primary="Add Packages" />
    </ListItemButton>
    </Link>
    <Link style={{ textDecoration: 'none' }} href='/admin/manageinactivepackages' underline="none" color='#00C0D9'>
    <ListItemButton>
      <ListItemIcon>
        <VisibilityOffIcon sx={{ color: '#00C0D9' }} />
      </ListItemIcon>
      <ListItemText primary="Inactive Packages" />
    </ListItemButton>
    </Link>
    {/* <Link style={{ textDecoration: 'none' }} href='/admin/managepackages' underline="none" color='#00C0D9'>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon sx={{ color: '#00C0D9' }} />
      </ListItemIcon>
      <ListItemText primary="Add Packages" />
    </ListItemButton>
    </Link> */}
  </React.Fragment>
);
