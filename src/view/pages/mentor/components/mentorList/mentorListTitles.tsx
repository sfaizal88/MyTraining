/**
 * 
 * Mentor titles component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {Grid, GridSize} from '@mui/material';

// GENERIC COMPONENT IMPORT
import {Title, ListTitles} from '@/view/atoms';

// TITLES PROPS
type MentorListTitlesProps = {
  widths: (boolean | GridSize)[];
};

// RENDER HTML
const MentorListTitles = ({widths}: MentorListTitlesProps) => (
  <ListTitles>
    <Grid container>
      <Grid item xs={widths[0]}>
        <Title title="Mentor Name" />
      </Grid>
      <Grid item xs={widths[1]}>
        <Title title="No. of Student" />
      </Grid>
      <Grid item xs={widths[2]}>
        <Title title="Contact No" />
      </Grid>
      <Grid item xs={widths[3]}>
        <Title title="Email" />
      </Grid>
      <Grid item xs={widths[4]}>
        <Title title="Actions" center/>
      </Grid>
    </Grid>
  </ListTitles>
);

export default MentorListTitles;
