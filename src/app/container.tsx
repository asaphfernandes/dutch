import styled from '@emotion/styled';

const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#eee',
    height: '100%',
  
    ' .topbar, .footer': {
      height: '56px',
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: 'red'
    },
    ' .topbar': {
    },
    ' .content': {
      flex: 1
    },
    ' .footer': {
  
    },
  });

export default Container;