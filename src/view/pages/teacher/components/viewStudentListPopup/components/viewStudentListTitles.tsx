/**
 * 
 * View student list titles component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {Grid, GridSize} from '@mui/material';

// GENERIC COMPONENT IMPORT
import {Title, ListTitles} from '@/view/atoms';

// RENDER HTML
const ViewStudentListTitles = () => (
  <ListTitles>
    <Grid container>
      <Grid item xs={3}>
        <Title title="Student Name" />
      </Grid>
      <Grid item xs={3}>
        <Title title="Role" />
      </Grid>
      <Grid item xs={3}>
        <Title title="Contact No" />
      </Grid>
      <Grid item xs={3}>
        <Title title="Email" />
      </Grid>
    </Grid>
  </ListTitles>
);

export default ViewStudentListTitles;
