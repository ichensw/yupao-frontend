/**
 * 用户类别
 */
export type UserType = {
    userId: number,
    username: string,
    userAccount: string,
    avatarUrl?: string,
    gender: number,
    phone: string,
    email: string,
    userStatus: number,
    roleId: number,
    createTime: Date,
    tags: string[],
    profile: string;

}