import { Grid, Box, Paper } from "@mui/material";

const MainDashboard = () => {
    return (
        <div>
            <Box component="div" sx={{ flexGrow: 1 }} p={3}>
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <Paper style={{padding: 15}}>123</Paper>
                    </Grid>
                    <Grid item item md={6} xs={12}>
                        <Paper style={{padding: 15}}>123</Paper>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default MainDashboard
