import { Stack, TextField, InputAdornment } from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react";

const MuiTextField = () => {
	const [value, setValue] = useState('')

	return (
		<Stack spacing={4}>
			<Stack direction="row" spacing={2}>
				<TextField label="Name" variant="outlined" />
				<TextField label="Name" variant="filled" />
				<TextField label="Name" variant="standard" />
			</Stack>
			<Stack direction="row" spacing={2}>
				<TextField label="Small secondary" size="small" color="secondary" />
			</Stack>
			<Stack direction="row" spacing={2}>
				<TextField 
					label="Form Input" 
					required 
					value={value} 
					onChange={(e) => setValue(e.target.value)} 
					error={!value}
					helperText={!value ? "Required" : ""}
				/>
				<TextField 
					label="Password" 
					type="password"
					helperText="Do not share your password with anyone!" 
					disabled
				/>
				<TextField label="Read only" InputProps={{ readOnly: true }} />
			</Stack>
			<Stack direction="row" spacing={2}>
				<TextField 
					label="amount" 
					InputProps={
						{
							startAdornment: <InputAdornment position="start">$</InputAdornment>
						}
					}
				/>
				<TextField 
					label="weight"
					InputProps={
						{
							endAdornment: <InputAdornment position="end">kg</InputAdornment>
						}
					}
				/>
				<TextField 
					label="password"
					InputProps={
						{
							endAdornment: <InputAdornment position="end"><VisibilityIcon /></InputAdornment>
						}
					}
				/>
			</Stack>
		</Stack>
	)
}

export default MuiTextField
