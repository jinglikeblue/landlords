class RoomNotice extends Notice
{
    private _pos: number;
    public get pos(): number
    {
        return this._pos;
    }

    public constructor(type: string, pos:number, data: any = null)
    {
        super(type, data);
        this._pos = pos;
    }
} 