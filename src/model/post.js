export default class Post {
  constructor(title, logo) {
    this.title = title
    this.date = new Date()
    this.logo = logo
  }

  toString() {
    return JSON.stringify(
      {
        date: this.date.toJSON(),
        logo: this.logo,
        title: this.title
      },
      null,
      2
    )
  }
}
