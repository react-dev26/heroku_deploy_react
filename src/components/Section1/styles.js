import { background } from 'utils';
export default {
  wrapper: {
    backgroundImage: 'url("https://www.dropbox.com/s/p9xjyikeb8shlh2/bg8.jpg?dl=1")',
    backgroundColor: '#6eb792',
    color: 'rgba(255, 255, 255, 0.75)',
    padding: '10em 0 6em 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'bottom left',
    backgroundSize: 'cover',
    borderTop: 'solid 10px #6eb792',
    position: 'relative',
    textAlign: 'center',
    width: '100%',
    // ':before': {
    // transition: 'opacity 1s ease-in-out',
    // transitionDelay: '0.75s',
    // content: '',
    // display: 'block',
    // background: '#202020',
    // height: '100%',
    // left: 0,
    // opacity: 0.25,
    // position: 'absolute',
    // top: 0,
    // width: '100%',
    // },
  },
  inner: {
    position: 'relative',
    transition: 'transform 0.75s ease-in-out, opacity 0.75s ease-in-out',
    width: '45em',
    maxWidth: 'calc(100% - 6em)',
    zIndex: 1,
  },
  h1: {
    marginBottom: '0.825em',
    color: '#ffffff',
    fontWeight: 100,
    fontSize: 40,
    margin: '40px, 0px 20px',
    lineHeight: 1.3,
    letterSpacing: '0.04em',
  },
  h3: {
    color: '#ffffff',
    fontSize: '1.2em',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.04em',
    margin: '0 0 1.5em 0',
  },
  h4: {
    color: '#ffffff',
    fontWeight: 400,
    fontSize: '1em',
    lineHeight: 1.5,
    letterSpacing: '0.04em',
    margin: '0 0 1.5em 0',
  },
  actions: {
    borderTop: 'solid 1px rgba(255, 255, 255, 0.25)',
    paddingTop: '3.5em',
    cursor: 'default',
    listStyle: 'none',
    paddingLeft: 0,
    marginRight: '0 0 2em 0',
  },
  li: {
    paddingRight: 0,
    display: 'inline-block',
    padding: '0 1em 0 0',
    verticalAlign: 'middle',
  },
  button: {
    backgroundColor: 'transparent',
    boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.75)',
    color: '#fff',
    minWidth: '15em',
    borderRadius: 4,
    border: 0,
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: '0.9em',
    fontWeight: 400,
    height: '3.5em',
    letterSpacing: '0.05em',
    lineHeight: '3.5em',
    padding: '0 2em',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
  },
};