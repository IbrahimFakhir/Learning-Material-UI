import { Box, Stack, Divider, Paper } from "@mui/material"

const MuiLayout = () => {
	return (
		<Paper sx={{ padding: "3rem" }} elevation={4}>
			<Stack
				sx={{
					border: "1px solid"
				}}
				direction="row"
				spacing={2}
				divider={<Divider orientation="vertical" flexItem />}
			>
				<Box
					sx={{
						backgroundColor: "primary.main",
						color: "white",
						height: "100px",
						width: "100px",
						padding: "16px",
						"&:hover": {
							backgroundColor: "primary.light",
						}
					}}
				>
					Codevolution
				</Box>
				<Box
					display="flex"
					height="100px"
					width="100px"
					bgcolor="success.light"
					p={2}
				>
					
				</Box>
			</Stack>
		</Paper>
	)
}

export default MuiLayout
