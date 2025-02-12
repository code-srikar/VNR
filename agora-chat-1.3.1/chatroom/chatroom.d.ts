import * as ChatRoomTypes from '../types/chatRoomApi';
import { AsyncResult, UserId } from '../types/common';
export interface ChatroomApi {
	/**
	 * Gets the chat room list with pagination.
	 *
	 * ```typescript
	 * connection.getChatRooms({pagenum: 1, pagesize: 20})
	 * ```
	 */
	getChatRooms(params: {
		/** The page number, starting from 1. */
		pagenum: number;
		/** The number of records per page. The default value is 20. */
		pagesize: number;
	}): Promise<AsyncResult<ChatRoomTypes.GetChatRoomsResult>>;

	/**
	 * Creates a chat room.
	 *
	 * ```typescript
	 * connection.createChatRoom({name: 'myChatRoom', description: 'this is my chatroom', maxusers: 200, members: ['user1'], token: 'your token'})
	 * ```
	 */
	createChatRoom(params: {
		/** The chat room name. */
		name: string;
		/** The description of the chat room. */
		description: string;
		/** The maximum number of members in the chat room, including the chat room creator. The value is an integer in the range of [1,5000], with 200 as the default. */
		maxusers: number;
		/** (Optional) The members in the chat room. An array of user IDs of members. If you set this parameter, ensure that the array contains at least one user ID. */
		members?: UserId[];
		/** The super admin token. */
		token: string;
	}): Promise<AsyncResult<ChatRoomTypes.CreateChatRoomResult>>;

	/**
	 * Destroys the chat room.
	 *
	 * ```typescript
	 * connection.destroyChatRoom({chatRoomId: 'chatRoomId', token: 'your token'})
	 * ```
	 */
	destroyChatRoom(params: {
		/** The chat room ID */
		chatRoomId: string;
		/** The super admin token. */
		token: string;
	}): Promise<AsyncResult<ChatRoomTypes.CreateChatRoomResult>>;

	/**
	 * Gets specifications of the chat room.
	 *
	 * ```typescript
	 * connection.getChatRoomDetails({chatRoomId: 'chatRoomId'})
	 * ```
	 */
	getChatRoomDetails(params: {
		/** The chat room ID. */
		chatRoomId: string;
	}): Promise<AsyncResult<Array<ChatRoomTypes.GetChatRoomDetailsResult>>>;

	/**
	 * Modifies the specifications of the chat room.
	 *
	 * ```typescript
	 * connection.modifyChatRoom({chatRoomId: 'chatRoomId', chatRoomName: 'chatRoomName', description: 'description', maxusers: 5000})
	 * ```
	 */
	modifyChatRoom(params: {
		/** The chat room ID. */
		chatRoomId: string;
		/** The chat room name. */
		chatRoomName: string;
		/** The description of the chat room. */
		description: string;
		/** The maximum number of members in the chat room. */
		maxusers: number;
	}): Promise<AsyncResult<ChatRoomTypes.ModifyChatRoomResult>>;

	/**
	 * Removes a chat room member.
	 *
	 * ```typescript
	 * connection.removeChatRoomMember({chatRoomId: 'chatRoomId', username: 'username'})
	 * ```
	 */
	removeChatRoomMember(params: {
		/** The chat room ID. */
		chatRoomId: string;
		/** The member to be removed. */
		username: string;
	}): Promise<AsyncResult<ChatRoomTypes.CommonRequestResult>>;

	/**
	 * Removes multiple chat room members.
	 *
	 * ```typescript
	 * connection.removeChatRoomMembers({chatRoomId: 'chatRoomId', users: ['user1', 'user2']})
	 * ```
	 */

	removeChatRoomMembers(params: {
		/** The chat room ID. */
		chatRoomId: string;
		/** The members to be removed. */
		users: string[];
	}): Promise<AsyncResult<ChatRoomTypes.CommonRequestResult[]>>;

	/**
	 * Adds chat room members.
	 *
	 * ```typescript
	 * connection.addUsersToChatRoom({chatRoomId: "chatRoomId", users:['user1', 'user2']})
	 * ```
	 */

	addUsersToChatRoom(params: {
		/** The chat room ID. */
		chatRoomId: string;
		/** The users to be added. */
		users: string[];
	}): Promise<AsyncResult<ChatRoomTypes.AddUsersToChatRoomResult>>;

	/**
	 * Joins the chat room. After a user joins successfully, other members in the chat room will receive operation: 'memberPresence' in the onChatroomEvent callback.
	 *
	 * ```typescript
	 * connection.joinChatRoom({roomId: 'roomId'})
	 * ```
	 */
	joinChatRoom(params: {
		/** The chat room ID. */
		roomId: string;
		/** The reason for joining the chat room. This parameter does not take effect. You can ignore it. */
		message?: string;
		/** Extension fields carried when joining a chat room. */
		ext?: string;
		/** Whether to leave all the currently joined chat rooms when joining a chat room.
		 * - `true`: The user joins the chat room, while leaving all other chat rooms.
		 * -  (Default) `false`: The user joins the chat room, without leaving all other chat rooms.
		 */
		leaveOtherRooms?: boolean;
	}): Promise<AsyncResult<ChatRoomTypes.CommonRequestResult>>;

	/**
	 * Exits the chat room. When a member exits the chat room, other members will receive operation: `memberAbsence` in the onChatroomEvent callback.
	 *
	 * ```typescript
	 * connection.leaveChatRoom({roomId: 'roomId'})
	 * ```
	 */
	leaveChatRoom(params: {
		/** The chat room ID. */
		roomId: string;
	}): Promise<
		AsyncResult<{
			result: boolean;
		}>
	>;

	/**
	 * Lists all chat room members with pagination.
	 *
	 * ```typescript
	 * connection.listChatRoomMembers({pageNum: 1, pageSize: 20, chatRoomId: 'chatRoomId'})
	 * ```
	 */
	listChatRoomMembers(params: {
		/** The page number, starting from 1. */
		pageNum: number;
		/** The number of members that you expect to get on each page. The value range is [1,1000]. */
		pageSize: number;
		/** The chat room ID. */
		chatRoomId: string;
	}): Promise<
		AsyncResult<
			{
				member: string;
			}[]
		>
	>;

	/**
	 * Gets all admins of the chat room.
	 *
	 * ```typescript
	 * connection.getChatRoomAdmin({chatRoomId: 'chatRoomId'})
	 * ```
	 */
	getChatRoomAdmin(params: {
		/** The chat room ID. */
		chatRoomId: string;
	}): Promise<AsyncResult<ChatRoomTypes.GetChatRoomAdminResult>>;

	/**
	 * Sets a member as the chat room admin. Only the chat room owner can call this method. The new admin will receive "operation: 'setAdmin'" in the callback of onChatroomEvent.
	 *
	 * ```typescript
	 * connection.setChatRoomAdmin({chatRoomId: 'chatRoomId', username: 'user1'})
	 * ```
	 */
	setChatRoomAdmin(params: {
		/** The chat room ID. */
		chatRoomId: string;
		/** The members to be set as admin. */
		username: string;
	}): Promise<AsyncResult<ChatRoomTypes.SetChatRoomAdminResult>>;

	/**
	 * Removes chat room admins. Only the chat room owner can call this method. The users whose admin privileges are removed will receive "operation: 'removeAdmin'" in the callback of onChatroomEvent.
	 *
	 * ```typescript
	 * connection.removeChatRoomAdmin({chatRoomId: 'chatRoomId', username: 'user1'})
	 * ```
	 */
	removeChatRoomAdmin(params: {
		/** The chat room ID. */
		chatRoomId: string;
		/** The admins to be removed. */
		username: string;
	}): Promise<AsyncResult<ChatRoomTypes.RemoveChatRoomAdminResult>>;

	/**
	 * Mutes chat room member. Only the chat room owner can call this method. The muted member and other admins will receive "operation:'muteMember'" in the callback of onChatroomEvent.
	 *
	 * ```typescript
	 * connection.muteChatRoomMember({username: 'user1', muteDuration: -1, chatRoomId: 'chatRoomId'})
	 * ```
	 */
	muteChatRoomMember(params: {
		/** The member to be muted in the chat room. */
		username: string;
		/** The mute duration in milliseconds. The value -1 indicates that the member is muted permanently. */
		muteDuration: number;
		/** The chat room ID. */
		chatRoomId: string;
	}): Promise<AsyncResult<ChatRoomTypes.MuteChatRoomMemberResult>>;

	/**
	 * Unmutes the chat room member. Only the chat room owner can call this method. The members who are muted and other admins will receive "operation: 'unmuteMember'" in the callback of onChatroomEvent.
	 *
	 * ```typescript
	 * connection.unmuteChatRoomMember({chatRoomId: 'chatRoomId', username: 'user1'})
	 * ```
	 */
	unmuteChatRoomMember(params: {
		/** The chat room ID. */
		chatRoomId: string;
		/** The member to be unmuted. */
		username: string;
	}): Promise<AsyncResult<ChatRoomTypes.UnmuteChatRoomMemberResult[]>>;

	/**
	 * Gets all muted members in the chat room.
	 *
	 * ```typescript
	 * connection.getChatRoomMuted({chatRoomId: 'chatRoomId'})
	 * ```
	 */
	getChatRoomMutelist(params: {
		/** The chat room ID. */
		chatRoomId: string;
	}): Promise<AsyncResult<ChatRoomTypes.GetChatRoomMuteListResult[]>>;

	/**
	 * Adds a member to the chat room blocklist. Only the chat room owner or admin can call this method.
	 *
	 * ```typescript
	 * connection.blockChatRoomMember({chatRoomId: 'chatRoomId', username: 'user1'})
	 * ```
	 */
	blockChatRoomMember(params: {
		/** The chat room ID. */
		chatRoomId: string;
		/** The member to be added to the blocklist. */
		username: string;
	}): Promise<AsyncResult<ChatRoomTypes.CommonRequestResult>>;

	/**
	 * Adds members to the chat room blocklist. Only the chat room owner or admin can call this method.
	 *
	 * ```typescript
	 * connection.blockChatRoomMembers({usernames: ['user1', 'user2'], chatRoomId: 'chatRoomId'})
	 * ```
	 */

	blockChatRoomMembers(params: {
		/** The chat room ID. */
		chatRoomId: string;
		/** The members to be added to the blocklist. */
		usernames: string[];
	}): Promise<AsyncResult<ChatRoomTypes.CommonRequestResult[]>>;

	/**
	 * Removes a member from the chat room blocklist. Only the chat room owner or admin can call this method.
	 *
	 * ```typescript
	 * connection.unblockChatRoomMember({chatRoomId: 'chatRoomId', username: 'user1'})
	 * ```
	 */
	unblockChatRoomMember(params: {
		/** The chat room ID. */
		chatRoomId: string;
		/** The member to be removed from the blocklist. */
		username: string;
	}): Promise<AsyncResult<ChatRoomTypes.CommonRequestResult>>;

	/**
	 * Removes members from the chat room blocklist. Only the chat room owner or admin can call this method.
	 *
	 * ```typescript
	 * connection.unblockChatRoomMembers({chatRoomId: 'chatRoomId', usernames: ['user1', 'user2']})
	 * ```
	 */
	unblockChatRoomMembers(params: {
		/** The chat room ID. */
		chatRoomId: string;
		/** The array of members to be removed from the blocklist. */
		usernames: string[];
	}): Promise<AsyncResult<ChatRoomTypes.CommonRequestResult[]>>;

	/**
	 * Gets the blocklist of the chat room.
	 *
	 * ```typescript
	 * connection.getChatRoomBlocklist({chatRoomId: 'chatRoomId'})
	 * ```
	 */
	getChatRoomBlocklist(params: {
		/** The chat room ID. */
		chatRoomId: string;
	}): Promise<AsyncResult<UserId[]>>;

	/**
	 * Mutes all the members in the chat room. Only the chat room owner or admin can call this method. Chat room members will receive the muteAllMembers event.
	 *
	 * ```typescript
	 * connection.disableSendChatRoomMsg({chatRoomId: 'chatRoomId'})
	 * ```
	 */
	disableSendChatRoomMsg(params: {
		/** The chat room ID. */
		chatRoomId: string;
	}): Promise<AsyncResult<ChatRoomTypes.WhetherAbleSendChatRoomMsgResult>>;

	/**
	 * Unmutes all the members in the chat room.
	 *
	 * Only the chat room owner or admin can call this method.
	 *
	 * The chat room members will receive the `unmuteAllMembers` event.
	 *
	 * ```typescript
	 * connection.enableSendChatRoomMsg({chatRoomId: 'chatRoomId'})
	 * ```
	 */
	enableSendChatRoomMsg(params: {
		/** The chat room ID. */
		chatRoomId: string;
	}): Promise<AsyncResult<ChatRoomTypes.WhetherAbleSendChatRoomMsgResult>>;

	/**
	 * Adds members to the allow list of the chat room. Members added to the allow list of the chat room will receive "operation: 'addUserToAllowlist'" in the callback of onChatroomEvent.
	 *
	 * ```typescript
	 * connection.addUsersToChatRoomAllowlist({chatRoomId: 'chatRoomId'})
	 * ```
	 */
	addUsersToChatRoomAllowlist(params: {
		/** The chat room ID. */
		chatRoomId: string;
		/** The members to be added to the allow list. */
		users: string[];
	}): Promise<
		AsyncResult<
			| ChatRoomTypes.CommonRequestResult
			| ChatRoomTypes.CommonRequestResult[]
		>
	>;

	/**
	 * Removes members from the allow list of the chat room. Only the chat room owner or admin can call this method. The members removed from the allow list will receive "operation:'removeAllowlistMember'" in the callback of onChatroomEvent.
	 *
	 * ```typescript
	 * connection.removeChatRoomAllowlistMember({chatRoomId: 'chatRoomId', userName: 'user1'})
	 * ```
	 */
	removeChatRoomAllowlistMember(params: {
		/** The chat room ID. */
		chatRoomId: string;
		/** The members to be removed from the allow list. */
		userName: string;
	}): Promise<AsyncResult<ChatRoomTypes.CommonRequestResult>>;

	/**
	 * Gets the allow list of the chat room. Only the chat room owner or admin can call this method.
	 *
	 * ```typescript
	 * connection.getChatRoomAllowlist({chatRoomId: 'chatRoomId'})
	 * ```
	 */
	getChatRoomAllowlist(params: {
		/** The chat room ID. */
		chatRoomId: string;
	}): Promise<AsyncResult<UserId[]>>;

	/**
	 * Checks whether chat room members are on the allow list. Only the chat room owner or admin can call this method. The chat room members can check themselves.
	 *
	 * ```typescript
	 * connection.isInChatRoomAllowlist({chatRoomId: 'chatRoomId', userName: 'user1'})
	 * ```
	 */
	isInChatRoomAllowlist(params: {
		/** The chat room ID. */
		chatRoomId: string;
		/** The member ID. */
		userName: string;
	}): Promise<AsyncResult<ChatRoomTypes.IsChatRoomWhiteUserResult>>;

	/**
	 * Gets the announcement of the chat room.
	 *
	 * ```typescript
	 * connection.fetchChatRoomAnnouncement({roomId: 'roomId'})
	 * ```
	 */
	fetchChatRoomAnnouncement(params: {
		/** The chat room ID. */
		roomId: string;
	}): Promise<AsyncResult<ChatRoomTypes.FetchChatRoomAnnouncementResult>>;

	/**
	 * Updates the announcement of the chat room.
	 *
	 * ```typescript
	 * connection.updateChatRoomAnnouncement({roomId: 'roomId', announcement: 'hello'})
	 * ```
	 */
	updateChatRoomAnnouncement(params: {
		/** The chat room ID. */
		roomId: string;
		/** The announcement content. */
		announcement: string;
	}): Promise<AsyncResult<ChatRoomTypes.UpdateChatRoomAnnouncementResult>>;

	/**
	 * Uploads a shared file to the chat room.
	 *
	 * ```typescript
	 * connection.uploadChatRoomSharedFile({roomId: 'roomId', file: 'file object', onFileUploadProgress: onFileUploadProgress, onFileUploadComplete: onFileUploadComplete,onFileUploadError:onFileUploadError,onFileUploadCanceled:onFileUploadCanceled})
	 * ```
	 */
	uploadChatRoomSharedFile(params: {
		/** The chat room ID. */
		roomId: string;
		/** The shared file object to upload. */
		file: object;
		/** The upload progress callback. */
		onFileUploadProgress?: (data: any) => void;
		/** The upload completion callback. */
		onFileUploadComplete?: (data: any) => void;
		/** The upload failure callback. */
		onFileUploadError?: (data: any) => void;
		/** The upload cancellation callback. */
		onFileUploadCanceled?: (data: any) => void;
	}): void;

	/**
	 * Deletes a shared file of the chat room.
	 *
	 * ```typescript
	 * connection.deleteChatRoomSharedFile({roomId: 'roomId', fileId: 'fileId'})
	 * ```
	 */
	deleteChatRoomSharedFile(params: {
		/** The chat room ID. */
		roomId: string;
		/** The shared file ID. */
		fileId: string;
	}): Promise<AsyncResult<ChatRoomTypes.DeleteChatRoomSharedFileResult>>;

	/**
	 * Gets a list of shared files in the chat room.
	 *
	 * ```typescript
	 * connection.getChatRoomSharedFilelist({roomId: 'roomId'})
	 * ```
	 */
	getChatRoomSharedFilelist(params: {
		/** The chat room ID */
		roomId: string;
	}): Promise<AsyncResult<ChatRoomTypes.FetchChatRoomSharedFileListResult[]>>;

	/**
	 * Gets all of the chat room custom attributes.
	 *
	 * ```typescript
	 * connection.getChatRoomAttributes({chatRoomId: 'roomId', attributes:["attributeKey1","attributeKey2"]})
	 * ```
	 */
	getChatRoomAttributes(params: {
		/** The chat room ID. */
		chatRoomId: string;
		/** The custom attribute to get. If you pass the attribute key, the SDK returns the attribute value. If you set it as null, the SDK returns all the attributes value. */
		attributeKeys?: Array<string>;
	}): Promise<AsyncResult<ChatRoomTypes.GetChatroomAttributesResult>>;

	/**
	 * Sets the chat room attributes in batches.
	 *
	 * ```typescript
	 * connection.setChatRoomAttributes({chatRoomId: 'roomId', attributes: {"attributeKey1": "attributeValue1"}, autoDelete: true, isForced: false})
	 * ```
	 */
	setChatRoomAttributes(params: {
		/** The chat room ID. */
		chatRoomId: string;
		/** The attributes. */
		attributes: {
			[key: string]: string;
		};
		/** Whether to delete chat room attributes set by the member when he or she exits the chat room. - (Default)`true`: Yes. - `false`: No. */
		autoDelete?: boolean;
		/** Whether to allow a member to overwrite the chat room attribute set by another member. - `true`: Yes. -（Default）`false`: No. */
		isForced?: boolean;
	}): Promise<AsyncResult<ChatRoomTypes.ChatroomAttributes>>;

	/**
	 * Sets a chat room custom attribute.
	 *
	 * ```typescript
	 * connection.setChatroomAttribute({chatRoomId: 'roomId', attributeKey: "attributeKey1", attributeValue: "attributeValue1", autoDelete: true, isForced: false})
	 * ```
	 */
	setChatRoomAttribute(params: {
		/** The chat room ID. */
		chatRoomId: string;
		/** The custom attribute key. */
		attributeKey: string;
		/** The custom attribute value. */
		attributeValue: string;
		/**
		 * Whether to delete chat room attributes set by the member when he or she exits the chat room.
		 * - (Default)`true`: Yes;
		 * - `false`: No.
		 */
		autoDelete?: boolean;
		/**
		 * Whether to allow a member to overwrite the chat room attribute set by another member.
		 * - `true`: Yes;
		 * - (Default)`false`: No.
		 */
		isForced?: boolean;
	}): Promise<AsyncResult<ChatRoomTypes.ChatroomAttributes>>;

	/**
	 * Removes chat room custom attributes.
	 *
	 * ```typescript
	 * connection.removeChatRoomAttributes({roomId: 'roomId', attributeKeys: ['attributeKey1','attributeKey2',...], isForced: false })
	 * ```
	 */
	removeChatRoomAttributes(params: {
		/** The chat room ID. */
		chatRoomId: string;
		/** The maximum number of keys to delete is 10. */
		attributeKeys: Array<string>;
		/** Whether to allow chat room members to delete all of the chat room attributes.
		 * - `true`: Yes;
		 * - (Default)`false`: No.
		 */
		isForced?: boolean;
	}): Promise<AsyncResult<ChatRoomTypes.ChatroomAttributes>>;

	/**
	 * Removes a chat room attribute.
	 *
	 * ```typescript
	 * connection.removeChatRoomAttributes({roomId: 'roomId', attributeKeys: ['string1','string2',...], isForced: boolean })
	 * ```
	 */
	removeChatRoomAttribute(params: {
		/** The chat room ID. */
		chatRoomId: string;
		/** The key of the chat room attribute to delete. */
		attributeKey: string;
		/**
		 * Whether to allow a member to delete any chat room attribute set by any member.
		 * - `true`: Yes;
		 * - (Default)`false`: No.
		 */
		isForced?: boolean;
	}): Promise<AsyncResult<ChatRoomTypes.ChatroomAttributes>>;

	/**
	 * Check whether you are on the chat room mute list.
	 *
	 * ```typescript
	 * connection.isInChatRoomMutelist({chatRoomId: 'chatRoomId'})
	 * ```
	 */
	isInChatRoomMutelist(params: {
		/** The chat room ID. */
		chatRoomId: string;
	}): Promise<AsyncResult<boolean>>;
}

export { ChatRoomTypes, AsyncResult, UserId };
