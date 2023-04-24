import {UserType} from "./user";

/**
 * 队伍类别
 */
export type TeamType = {
    teamId: number;
    name: string;
    description: string;
    expireTime?: Date;
    maxNum: number;
    password?: string,
    // todo 定义枚举值类型，更规范
    status: number;
    createTime: Date;
    updateTime: Date;
    createUser?: UserType;
    hasJoin?: boolean;
    joinNum?: number;
};

/**
 * 加入队伍类别
 */
export type JoinTeamType = {
    teamId: number;
    password?: string;
};
