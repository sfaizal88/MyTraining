/**
 * 
 * TechStack titles component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {Grid, GridSize} from '@mui/material';

// GENERIC COMPONENT IMPORT
import {Title, ListTitles} from '@/view/atoms';

// TITLES PROPS
type TechStackListTitlesProps = {
  widths: (boolean | GridSize)[];
};

// RENDER HTML
const TechStackListTitles = ({widths}: TechStackListTitlesProps) => (
  <ListTitles>
    <Grid container>
      <Grid item xs={widths[0]}>
        <Title title="Technology" />
      </Grid>
      <Grid item xs={widths[1]}>
        <Title title="Assigned to" />
      </Grid>
      <Grid item xs={widths[2]}>
        <Title title="No of topics" />
      </Grid>
      <Grid item xs={widths[3]}>
        <Title title="Actions" center/>
      </Grid>
    </Grid>
  </ListTitles>
);

export default TechStackListTitles;
