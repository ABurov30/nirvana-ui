import React from 'react'

const Note = (isActive?: boolean) => (
	<svg
		width="800px"
		height="800px"
		viewBox="0 0 256 256"
		id="Flat"
		xmlns="http://www.w3.org/2000/svg"
		fill={isActive ? '#6360FF' : '#434544'}
	>
		<path d="M210.29883,56.3374l-80-24A7.99991,7.99991,0,0,0,120,40V148.26123A47.97353,47.97353,0,1,0,136,184V50.75244L205.70117,71.6626a8,8,0,1,0,4.59766-15.3252ZM88,216a32,32,0,1,1,32-32A32.03635,32.03635,0,0,1,88,216Z" />
	</svg>
)

export default Note
