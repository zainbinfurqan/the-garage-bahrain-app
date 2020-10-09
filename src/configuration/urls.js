// we will define api urls for different api end points
//auth paths
export const REGISTRATION = 'user/api/auth/registration'
export const LOGIN = 'user/api/auth/login'

//get paths
export const GETCATEGORIES = 'user/api/category'
export const GETLEVEL1CATEGORIES = 'user/api/category/categorylevel1'
export const GETCARBRANDS = 'user/api/category/carbrands'
export const GETCARBRANDSBYCARFORSALE = ''
export const GETCARBRANDSBYSCRAPCARS = ''
export const GETCARSBTCARBRANDS = ''
export const GETALLPOSTS = ''
export const GETSINGLEUSERPOSTS = 'user/api/post/singleuser'
export const GETALLPOSTSFORADMIN = ''
export const GETSINGLEPOST = 'user/api/post/single'
// export const GETAPPROVEDPOSTS = 'admin/api/'
export const GETPENDINGPOSTS = 'admin/api/pendingposts'
export const GET_ALL_USERS = 'admin/api/searchuser'
export const GET_ALL_NOTIFICATIONS = '/api/notification/readall'
export const GET_UNREAD_NOTIFICATIONS = '/api/notification/unread'
export const GET_READ_NOTIFICATIONS = '/api/notification'
export const GET_ADVERTISE = '/api/advertise/'

//create paths
export const CREATPOST = ''

//update paths
export const UPDATE_POST_BY_USER = 'user/api/post'
export const UPDATE_POST_BY_ADMIN = 'admin/api/updateuserpost'
export const UPDATE_POST_TO_DELETE_BY_ADMIN = 'admin/api/deleteuserpost'
export const UPDATE_USER_TO_BLOCKED = 'admin/api/blockuser'
export const UPDATE_USER_TO_UNBLOCKED = 'admin/api/unblockuser'
export const UPDATE_USER_POST_TO_APPROVED = 'admin/api/approvepost'
// export const UPDATEUSERPOSTTONOTAPPROVED = ''
export const UPDATE_SINGLE_NOTIFICATION_TO_DELETE = '/api/notification/delete'
export const UPDATE_SINGLE_NOTIFICATION_TO_ISREAD = '/api/notification/read'
export const UPDATE_ALL_NOTIFICATION_TO_DELETE = '/api/notification/deleteall'
export const UPDATE_USER_POST_TO_APPROVED = 'admin/api/approvepost'
export const USERPOSTTOUPDATE = 'user/api/post'
export const USERPOSTTODELETE = 'user/api/post/delete'

//

