import { ModifiedMsgInfo } from '../types/message';
type ChatType = 'singleChat' | 'groupChat' | 'chatRoom';
export interface CustomParameters {
	/** The message type. */
	type: 'custom';
	/** The message ID. */
	id: string;
}
/** The delivery priority of chat room messages.
 *  Currently, this attribute is available only to chat room messages. If this attribute is not set, messages are assigned a medium priority. */
export type MessagePriority =
	/** High. */
	| 'high'
	/** Medium. */
	| 'normal'
	/** Low. */
	| 'low';

export interface CustomMsgSetParameters {
	/** The session type. */
	chatType: ChatType;
	/** The recipient. */
	to: string;
	/** The custom event. */
	customEvent: string;
	/** The custom event extension. */
	customExts: {
		[key: string]: any;
	};
	/** The sender, which can only be the current user and can not be changed. */
	from?: string;
	/** @deprecated Whether the session type is chat room. */
	roomType?: boolean;
	/** The callback for message sending success. */
	success?: () => void;
	/** The callback for a message sending failure. */
	fail?: () => void;
	/** The message extension. */
	ext?: {
		[key: string]: any;
	};
}
export interface CustomMsgBody extends CreateCustomMsgParameters {
	/** The message ID. */
	id: string;
	/** @deprecated Whether the session type is chat room. */
	roomType?: boolean;
	/** @deprecated Whether the session type is group. */
	group?: string;
	/** Whether read receipts are required during a group session. */
	msgConfig?: {
		allowGroupAck: boolean;
	};
	/** The callback for message sending success. */
	success?: () => void;
	/** The callback for a message sending failure. */
	fail?: () => void;
	/** Time. */
	time: number;
	/** Message priority. */
	priority?: MessagePriority;
	/** Whether global notify message or not. */
	broadcast?: boolean;
	/** Whether the message content is replaced. This property is valid only when `useReplacedMessageContent` is set to `true` during initialization. */
	isContentReplaced?: boolean;
	/** Whether the message is delivered only when the recipient(s) is/are online:
	 *  - `true`: The message is delivered only when the recipient(s) is/are online. If the recipient is offline, the message is discarded.
	 *  - (Default) `false`: The message is delivered when the recipient(s) is/are online. If the recipient(s) is/are offline, the message will not be delivered to them until they get online.
	 */
	deliverOnlineOnly?: boolean;
	/** Message modified info. */
	modifiedInfo?: ModifiedMsgInfo;
}
export interface CreateCustomMsgParameters {
	/** The message type. */
	type: 'custom';
	/** The session type. */
	chatType: ChatType;
	/** The recipient. */
	to: string;
	/** The custom event. */
	customEvent: string;
	/** The custom event extension. */
	customExts: {
		[key: string]: any;
	};
	/** The sender, which can only be the current user and can not be changed. */
	from?: string;
	/** The message extension. */
	ext?: {
		[key: string]: any;
	};
	/** Whether read receipts are required during a group session. */
	msgConfig?: {
		allowGroupAck: boolean;
	};
	/** Whether the message is a thread message. */
	isChatThread?: boolean;
	/** Message priority. */
	priority?: MessagePriority;
	/** Whether the message is delivered only when the recipient(s) is/are online:
	 *  - `true`: The message is delivered only when the recipient(s) is/are online. If the recipient is offline, the message is discarded.
	 *  - (Default) `false`: The message is delivered when the recipient(s) is/are online. If the recipient(s) is/are offline, the message will not be delivered to them until they get online.
	 */
	deliverOnlineOnly?: boolean;
	/** The list of message recipients. */
	receiverList?: string[];
}
export declare class Custom {
	id: string;
	type: 'custom';
	body?: CustomMsgBody;
	constructor(parameters: CustomParameters);
	/**
	 * @hidden
	 */
	set(options: CustomMsgSetParameters): void;
	/**
	 * @hidden
	 */
	setChatType(chatType: ChatType): boolean;
	/**
	 * @hidden
	 */
	setGroup(group: string): boolean;
	static create(options: CreateCustomMsgParameters): CustomMsgBody;
}
