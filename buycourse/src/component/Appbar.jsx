import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TranslateIcon from '@mui/icons-material/Translate';

const languages = ['தமிழ்', 'සිංහල', 'English'];

const pageTranslations = {
  'தமிழ்': ['தயாரிப்புகள்', 'விலை', 'வலைப்பதிவு'],
  'සිංහල': ['නිෂ්පාදන', 'මිල', 'බ්ලොග්'],
  'English': ['Products', 'Pricing', 'Blog'],
};

function ResponsiveAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElLang, setAnchorElLang] = React.useState(null);
  const [selectedLanguage, setSelectedLanguage] = React.useState('தமிழ்');
  const pages = pageTranslations[selectedLanguage];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleOpenLangMenu = (event) => {
    setAnchorElLang(event.currentTarget);
  };

  const handleCloseLangMenu = () => {
    setAnchorElLang(null);
  };

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    handleCloseLangMenu();
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
      sx={{
        width: 250,
        height: '100%',
        bgcolor: '#000',
        color: '#fff',
      }}
      role="presentation"
    >
      {/* Logo */}
      <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
        <AdbIcon sx={{ mr: 1, color: '#fff' }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#"
          sx={{
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.2rem',
            color: '#fff',
            textDecoration: 'none',
          }}
        >
          LOGO
        </Typography>
      </Box>

      {/* Page List */}
      <List>
        {pages.map((page) => (
          <ListItem button key={page}>
            <ListItemText
              primary={page}
              primaryTypographyProps={{ color: 'white' }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ background: '#000' }} dir="ltr">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                onClick={handleDrawerToggle}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => {}}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            {/* Language Selector */}
            <Box sx={{ flexGrow: 0 }}>
              <Button
                onClick={handleOpenLangMenu}
                sx={{
                  color: 'white',
                  backgroundColor: '#1e1e1e',
                  borderRadius: '20px',
                  textTransform: 'none',
                  px: 2,
                  py: 1,
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: '#333',
                  },
                  ml: 2,
                }}
                endIcon={<TranslateIcon />}
              >
                {selectedLanguage}
              </Button>
              <Menu
                anchorEl={anchorElLang}
                open={Boolean(anchorElLang)}
                onClose={handleCloseLangMenu}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                sx={{
                  '& .MuiPaper-root': {
                    borderRadius: 2,
                    minWidth: 150,
                    mt: 1,
                  },
                }}
              >
                {languages.map((lang) => (
                  <MenuItem
                    key={lang}
                    onClick={() => handleLanguageSelect(lang)}
                    sx={{
                      fontWeight: 500,
                      '&:hover': {
                        backgroundColor: '#f0f0f0',
                      },
                    }}
                  >
                    {lang}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default ResponsiveAppBar;
