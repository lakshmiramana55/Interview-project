import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import { People, Timeline, Description, Work, ShoppingCart, MonetizationOn, Star, BarChart, ThumbUp } from "@mui/icons-material"; // Icons
import "./DashboardCards.css"; // Import custom CSS for extra animations

const DashboardCards = () => {
  const stats = [
    {
      label: "Users",
      value: 150,
      icon: <People fontSize="large" />,
      color: "linear-gradient(135deg, #2196F3, #6EC6FF)",
      description: "Total registered users on the platform.",
      change: "+15%",
      trend: "up",
    },
    {
      label: "Active Sessions",
      value: 45,
      icon: <Timeline fontSize="large" />,
      color: "linear-gradient(135deg, #4CAF50, #81C784)",
      description: "Currently active user sessions.",
      change: "-5%",
      trend: "down",
    },
    {
      label: "Reports Generated",
      value: 30,
      icon: <Description fontSize="large" />,
      color: "linear-gradient(135deg, #FF5722, #FF8A65)",
      description: "Reports generated this month.",
      change: "+10%",
      trend: "up",
    },
    {
      label: "Ongoing Projects",
      value: 12,
      icon: <Work fontSize="large" />,
      color: "linear-gradient(135deg, #673AB7, #9575CD)",
      description: "Projects currently in progress.",
      change: "+3%",
      trend: "up",
    },
    {
      label: "Orders Processed",
      value: 500,
      icon: <ShoppingCart fontSize="large" />,
      color: "linear-gradient(135deg, #FF9800, #FFB74D)",
      description: "Orders successfully processed.",
      change: "+20%",
      trend: "up",
    },
    {
      label: "Revenue Generated",
      value: "$75K",
      icon: <MonetizationOn fontSize="large" />,
      color: "linear-gradient(135deg, #E91E63, #F06292)",
      description: "Total revenue this month.",
      change: "+8%",
      trend: "up",
    },
    {
      label: "New Reviews",
      value: 250,
      icon: <Star fontSize="large" />,
      color: "linear-gradient(135deg, #FFC107, #FFD54F)",
      description: "New customer reviews received.",
      change: "+12%",
      trend: "up",
    },
    {
      label: "Total Likes",
      value: "1.5K",
      icon: <ThumbUp fontSize="large" />,
      color: "linear-gradient(135deg, #009688, #4DB6AC)",
      description: "Total likes on your platform.",
      change: "+25%",
      trend: "up",
    },
  ];

  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      {stats.map((stat, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card className="dashboard-card" style={{ background: stat.color }}>
            <CardContent>
              <Box className="icon-container">{stat.icon}</Box>
              <Typography variant="h3" fontWeight="bold">
                {stat.value}
              </Typography>
              <Typography variant="h6" className="label-text">
                {stat.label}
              </Typography>
              <Typography variant="body2" className="description-text">
                {stat.description}
              </Typography>
              <Box className="change-container">
                <Typography variant="h6" className={`change-text ${stat.trend === "up" ? "up" : "down"}`}>
                  {stat.change}
                </Typography>
                {stat.trend === "up" ? <BarChart sx={{ color: "green" }} /> : <Timeline sx={{ color: "red" }} />}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DashboardCards;
