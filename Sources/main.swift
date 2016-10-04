import Foundation
import Kitura

let router = Router()

router.all("/", middleware: StaticFileServer(path: "./public"))

router.get("/hello") { _, response, next in
    response.headers["Content-Type"] = "text/plain; charset=utf-8"
    let fName = "World"
    try response.send("Hello \(fName), from Kitura!").end()
}

Kitura.addHTTPServer(onPort: 8090, with: router)
Kitura.run()
