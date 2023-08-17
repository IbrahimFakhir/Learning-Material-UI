import { Button, Stack, IconButton } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';

const MuiButton = () => {
	return (
		<Stack spacing={4}>
			<Stack spacing={2} direction="row">
				<Button variant="text">Text</Button>
				<Button variant="contained">Contained</Button>
				<Button variant="outlined">Outlined</Button>
			</Stack>
			<Stack spacing={2} direction="row">
				<Button variant="contained" color="primary">
					Primary
				</Button>
				<Button variant="contained" color="secondary">
					Secondary
				</Button>
				<Button variant="contained" color="error">
					Error
				</Button>
				<Button variant="contained" color="warning">
					Warning
				</Button>
				<Button variant="contained" color="info">
					Info
				</Button>
				<Button variant="contained" color="success">
					Success
				</Button>
			</Stack>
			<Stack display="block" spacing={2} direction="row">
				<Button variant="contained" size="small">
					Small
				</Button>
				<Button variant="contained" size="medium">
					Medium
				</Button>
				<Button variant="contained" size="large">
					Large
				</Button>
			</Stack>
			<Stack spacing={2} direction="row">
				<Button variant="contained" startIcon={<SendIcon />} disableRipple onClick={() => alert("Clicked")}>
					Send
				</Button>
				<Button variant="contained" endIcon={<SendIcon />} disableElevation>
					Send
				</Button>
				<IconButton aria-label="send" className="icon-btn">
					<SendIcon />
					<span className="nav-text">Send</span>
				</IconButton>
			</Stack>
		</Stack>
	)
}

export default MuiButton
