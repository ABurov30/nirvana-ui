export type ThemeSwitcherProps = {
	theme: 'light' | 'dark'
	changeTheme: (value: string) => void
	checked: boolean
}
