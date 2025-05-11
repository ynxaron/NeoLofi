use actix_files::Files;
use actix_web::{App, HttpServer, Result, web, HttpResponse};

async fn index() -> Result<HttpResponse> {
    Ok(HttpResponse::Ok()
        .content_type("text/html")
        .body(include_str!("../static/index.html")))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .route("/", web::get().to(index))
            .service(Files::new("/gifs", "static/gifs").show_files_listing())
            .service(Files::new("/css", "static/css"))
            .service(Files::new("/js", "static/js"))
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
