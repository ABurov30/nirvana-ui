import React from 'react'
import {
	FacebookShareButton,
	TelegramShareButton,
	TwitterShareButton,
	VKShareButton,
	WhatsappShareButton
} from 'react-share'

import Icon from '../../../Icons/Icon/Icon'
import styles from './ShareButton.module.scss'
import { ShareButtonProps } from './types'

function ShareButton({
	title,
	hashtags,
	shareHandler,
	icons
}: ShareButtonProps) {
	const URL = `${window.location.protocol}//${window.location.host}${window.location.pathname}`

	return (
		<div className={styles.shareButtonContainer}>
			<div className={styles.buttons}>
				<button
					className={styles.mainButton}
					aria-label="Share"
					onClick={shareHandler}
				>
					<svg
						width="25"
						height="25"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2500/svg"
					>
						<path d="M15.75 5.125a3.125 3.125 0 1 1 .754 2.035l-8.397 3.9a3.124 3.124 0 0 1 0 1.88l8.397 3.9a3.125 3.125 0 1 1-.61 1.095l-8.397-3.9a3.125 3.125 0 1 1 0-4.07l8.397-3.9a3.125 3.125 0 0 1-.144-.94Z"></path>
					</svg>
				</button>
				<button
					className={`${styles.vkButton} ${styles.button}`}
					style={{
						transitionDelay: '0s, 0s, 0s',
						transitionProperty: 'translate, background, box-shadow'
					}}
					aria-label="VK"
				>
					<VKShareButton url={URL} title={title}>
						<Icon path={icons[0]} />
					</VKShareButton>
				</button>
				<button
					className={`${styles.twitterButton} ${styles.button}`}
					style={{
						transitionDelay: ' 0.1s, 0s, 0.1s',
						transitionProperty: 'translate, background, box-shadow'
					}}
					aria-label="Twitter"
				>
					<TwitterShareButton
						url={URL}
						title={title}
						hashtags={hashtags}
					>
						<Icon path={icons[1]} />
					</TwitterShareButton>
				</button>
				<button
					className={`${styles.facebookButton} ${styles.button}`}
					style={{
						transitionDelay: '0.2s, 0s, 0.2s',
						transitionProperty: 'translate, background, box-shadow'
					}}
					aria-label="Facebook"
				>
					<FacebookShareButton
						url={URL}
						title={title}
						hashtag={hashtags[0]}
					>
						<Icon path={icons[2]} />
					</FacebookShareButton>
				</button>
				<button
					className={`${styles.telegramButton} ${styles.button}`}
					style={{
						transitionDelay: ' 0.3s, 0s, 0.3s',
						transitionProperty: 'translate, background, box-shadow'
					}}
					aria-label="Telegram"
				>
					<TelegramShareButton url={URL} title={title}>
						<Icon path={icons[3]} />
					</TelegramShareButton>
				</button>
				<button
					className={`${styles.whatsappButton} ${styles.button}`}
					style={{
						transitionDelay: '0.4s, 0s, 0.4s',
						transitionProperty: 'translate, background, box-shadow'
					}}
					aria-label="Whatsapp"
				>
					<WhatsappShareButton url={URL} title={title}>
						<Icon path={icons[4]} />
					</WhatsappShareButton>
				</button>
			</div>
		</div>
	)
}

export default ShareButton
