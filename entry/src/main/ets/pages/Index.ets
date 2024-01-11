import { add } from 'lodash'

@Entry
@Component
struct Index {
  @State message: string = 'Hello World'

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)

        Text('' + add(6, 3))
          .fontSize(50)
      }
      .width('100%')
    }
    .height('100%')
  }
}