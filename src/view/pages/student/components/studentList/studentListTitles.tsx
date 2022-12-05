/**
 * 
 * Customer titles component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {Grid, GridSize} from '@mui/material';

// GENERIC COMPONENT IMPORT
import {Title, ListTitles} from '@/view/atoms';

// TITLES PROPS
type StudentListTitlesProps = {
  widths: (boolean | GridSize)[];
};

// RENDER HTML
const StudentListTitles = ({widths}: StudentListTitlesProps) => (
  <ListTitles>
    <Grid container>
      <Grid item xs={widths[0]}>
        <Title title="Student Name" />
      </Grid>
      <Grid item xs={widths[1]}>
        <Title title="Date of Birth" />
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

export default StudentListTitles;
