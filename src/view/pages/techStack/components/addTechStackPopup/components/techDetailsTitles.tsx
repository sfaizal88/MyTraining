/**
 * 
 * Tech Details titles component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {Grid, GridSize} from '@mui/material';

// GENERIC COMPONENT IMPORT
import {Title, ListTitles} from '@/view/atoms';

// TITLES PROPS
type TechDetailsTitlesProps = {
  widths: (boolean | GridSize)[];
};

// RENDER HTML
const TechDetailsTitles = ({widths}: TechDetailsTitlesProps) => (
  <ListTitles>
    <Grid container spacing={2}>
      <Grid item xs={widths[0]}>
        <Title title="Topic name" />
      </Grid>
      <Grid item xs={widths[1]}>
        <Title title="Tutorial link" />
      </Grid>
      <Grid item xs={widths[2]}>
        <Title title="Video link" />
      </Grid>
      <Grid item xs={widths[3]}>
        <Title title="Actions" center/>
      </Grid>
    </Grid>
  </ListTitles>
);

export default TechDetailsTitles;
