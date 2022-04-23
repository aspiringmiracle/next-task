// material
import { useTheme } from '@mui/material/styles';
import { GlobalStyles as GlobalThemeStyles } from '@mui/material';

// ----------------------------------------------------------------------

export default function GlobalStyles() {
  const theme = useTheme();

  return (
    <GlobalThemeStyles
      styles={{
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          MsOverflowStyle: 'none',
          '&::-webkit-scrollbar': {
            // display: 'none'
          }
        },
        '.css-1k53ag-MuiStack-root': {
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },
        '.MuiListItemButton-root.active':{
            backgroundColor:'rgb(238,238,238)'
        },
        '.css-1oryxm9 .MuiPaper-root': {
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },
        '.css-5a54uv-MuiStack-root': {
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },
        '#filter-select-autocomplete-listbox': {
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },
        html: {
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch',
          '&::-webkit-scrollbar': {
            // display: 'none'
          }

        },
        body: {
          width: '100%',
          height: '100%',
          backgroundColor: '#F7F9FF',
          '&::-webkit-scrollbar': {
            // display: 'none'
          }
        },
        '#root': {
          width: '100%',
          height: '100%'
        },
        input: {
          '&[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
              margin: 0,
              WebkitAppearance: 'none'
            },
            '&::-webkit-inner-spin-button': {
              margin: 0,
              WebkitAppearance: 'none'
            }
          }
        },
        textarea: {
          '&::-webkit-input-placeholder': {
            color: theme.palette.text.disabled
          },
          '&::-moz-placeholder': {
            opacity: 1,
            color: theme.palette.text.disabled
          },
          '&:-ms-input-placeholder': {
            color: theme.palette.text.disabled
          },
          '&::placeholder': {
            color: theme.palette.text.disabled
          }
        },

        img: { display: 'block', maxWidth: '100%' },

        // Lazy Load Img
        '.blur-up': {
          WebkitFilter: 'blur(5px)',
          filter: 'blur(5px)',
          transition: 'filter 400ms, -webkit-filter 400ms'
        },
        '.blur-up.lazyloaded ': {
          WebkitFilter: 'blur(0)',
          filter: 'blur(0)'
        }
      }}
    />
  );
}
