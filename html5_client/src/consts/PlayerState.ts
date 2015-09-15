﻿class PlayerState
{
    //空闲
    public static FREE: number = 0;
    //已准备
    public static PREPARE: number = 1;
    //叫地主
    public static CALL: number = 2;
    //抢地主
    public static ROB: number = 3;
    //出牌
    public static PUSH: number = 4;
    //等待其它玩家
    public static WAITING: number = 5;
} 