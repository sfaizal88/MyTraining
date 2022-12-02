/**
 * 
 * Roadmap titles component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {Grid, GridSize} from '@mui/material';

// GENERIC COMPONENT IMPORT
import {Title, ListTitles} from '@/view/atoms';

// TITLES PROPS
type MileStoneTitlesProps = {
  widths: (boolean | GridSize)[];
};

// RENDER HTML
const MileStoneTitles = ({widths}: MileStoneTitlesProps) => (
  <ListTitles>
    <Grid container spacing={2}>
      <Grid item xs={widths[0]}>
        <Title title="Title" />
      </Grid>
      <Grid item xs={widths[1]}>
        <Title title="Description" />
      </Grid>
      <Grid item xs={widths[2]}>
        <Title title="Date" />
      </Grid>
      <Grid item xs={widths[3]}>
        <Title title="Completed" />
      </Grid>
      <Grid item xs={widths[4]}>
        <Title title="Actions" center/>
      </Grid>
    </Grid>
  </ListTitles>
);

export default MileStoneTitles;
