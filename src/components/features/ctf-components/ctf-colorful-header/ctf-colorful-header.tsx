import { Container, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { optimizeLineBreak } from '@src/utils';

import { ColorfulHeaderFieldsFragment } from './__generated/ctf-colorful-header.generated';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textAlign: 'center',
  },
  innerContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '93.4rem',
    padding: theme.spacing(19, 0, 19),
  },
  headline: {
    fontWeight: 'bold',
  },
  subline: {
    fontWeight: 400,
    lineHeight: 1.52,
    marginTop: theme.spacing(8),
  },
  ctaContainer: {
    marginTop: theme.spacing(8),
  },
}));

export const CtfColorfulHeader = (props: ColorfulHeaderFieldsFragment) => {
  const { text, color } = props;
  const classes = useStyles();
  console.log(props)
  console.log("a very colorful header")
  return (
    <Container
      maxWidth={false}
      className={classes.root}
      style={{
        backgroundColor: color ? color :  "#FFFFFF",
      }}>
      <div className={classes.innerContainer}>
        {text && (
          <Typography
            variant="h1"
            component="h2"
            className={classes.headline}
            style={{ color: color ? color : "#FFFFFF" }}>
            {optimizeLineBreak(text)}
          </Typography>
        )}
      </div>
    </Container>
  );
};
