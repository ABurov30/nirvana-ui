import React from 'react'
//@ts-ignore
import styles from './UserPanel.module.scss'
import { IUserPanelProps } from './types'

export default function UserPanel({
	name,
	nickname,
	amountOfMessages
}: IUserPanelProps) {
	return (
		<button className={styles.buttonMessage}>
			<div className={styles.contentAvatar}>
				<div className={styles.statusUser}></div>
				<div className={styles.avatar}>
					<svg className={styles.userImg} viewBox="0 0 24 24">
						<path d="M12,12.5c-3.04,0-5.5,1.73-5.5,3.5s2.46,3.5,5.5,3.5,5.5-1.73,5.5-3.5-2.46-3.5-5.5-3.5Zm0-.5c1.66,0,3-1.34,3-3s-1.34-3-3-3-3,1.34-3,3,1.34,3,3,3Z"></path>
					</svg>
				</div>
			</div>
			<div className={styles.noticeContent}>
				<div className={styles.username}>{name}</div>
				<div className={styles.lableMessage}>
					Message
					<span className={styles.numberMessage}>
						{amountOfMessages}
					</span>
				</div>
				<div className={styles.userId}>{nickname}</div>
			</div>
		</button>
	)
}
