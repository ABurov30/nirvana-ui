import React from 'react'
import { VolumeButtonProps } from './types'
import RoundButton from '../../RoundButtons/RoundButton/RoundButton'
import VolumeDownRoundedIcon from '@mui/icons-material/VolumeDownRounded'
import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded'
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded'

export default function VolumeButton({ volume, onClick }: VolumeButtonProps) {
	return (
		<>
			{volume > 0.5 ? (
				<RoundButton icon={<VolumeUpRoundedIcon />} onClick={onClick} />
			) : volume > 0 ? (
				<RoundButton
					icon={<VolumeDownRoundedIcon />}
					onClick={onClick}
				/>
			) : (
				<RoundButton
					icon={<VolumeOffRoundedIcon />}
					onClick={onClick}
				/>
			)}
		</>
	)
}
