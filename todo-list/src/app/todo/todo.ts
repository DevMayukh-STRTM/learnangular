export class Todo {
    _id: number
    title: string
    description: string

    constructor(_id: number, title: string, description: string) {
        this._id = _id
        this.title = title
        this.description = description
    }

}