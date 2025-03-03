import { Container, Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCards from "../components/DashboardCards";
import UsersTable from "../components/UsersTable";
// import Chart from "../components/Chart";

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flexGrow: 1, padding: "20px" }}>
        <Navbar />
        <Container>
          <DashboardCards />
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <UsersTable />
            </Grid>
            <Grid item xs={12} md={6}>
              {/* <Chart /> */}
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
