// const gulp = require("gulp"),
//     browserSync = require("browser-sync"),
//     sass = require("gulp-sass")(require("sass")),
//     cleanCSS = require("gulp-clean-css"),
//     autoprefixer = import("gulp-autoprefixer"),
//     babel = require("gulp-babel"),
//     uglify = require("gulp-uglify"),
//     rename = require("gulp-rename"),
//     imagemin = import("gulp-imagemin"),
//     htmlmin = require("gulp-htmlmin");

import gulp from "gulp";
import imagemin from "gulp-imagemin";
import browserSync from "browser-sync";
import gulpSass from "gulp-sass";
// import sass from "sass";
import * as sass from "sass";
import cleanCSS from "gulp-clean-css";
import autoprefixer from "gulp-autoprefixer";
import babel from "gulp-babel";
import uglify from "gulp-uglify";
import rename from "gulp-rename";
import htmlmin from "gulp-htmlmin";

const sassCompiler = gulpSass(sass);

gulp.task("server", function () {
    browserSync.init({
        proxy: "WeatherForecast",
    });

    gulp.watch("src/index.html").on("change", function () {
        browserSync.reload();
    });
    gulp.watch("src/scss/**/*.+(scss|sass)").on("change", function () {
        browserSync.reload();
    });
    gulp.watch("src/js/*.js").on("change", function () {
        browserSync.reload();
    });
});

gulp.task("styles", function () {
    return gulp
        .src("src/scss/**/*.+(scss|sass)")
        .pipe(sassCompiler({ outputStyle: "compressed" }).on("error", sassCompiler.logError))
        .pipe(rename({ suffix: ".min", prefix: "" }))
        .pipe(autoprefixer())
        .pipe(cleanCSS({ compatibility: "ie8" }))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

gulp.task("watch", function () {
    gulp.watch("src/scss/**/*.+(scss|sass|css)", gulp.parallel("styles"));
    gulp.watch("src/index.html").on("change", gulp.parallel("html"));
    gulp.watch("src/js/*.js").on("change", gulp.parallel("scripts"));
});

gulp.task("html", function () {
    return gulp
        .src("src/index.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("dist"));
});

gulp.task("scripts", function () {
    return (
        gulp
            .src("src/js/*.js")
            .pipe(babel())
            // .pipe(concat('quiz.min.js'))
            .pipe(uglify())
            .on("error", function (err) {
                console.error("Ошибка при объединении или транспиляции:", err.toString());
            })
            .pipe(gulp.dest("dist/js"))
    );
});

gulp.task("fonts", function () {
    return gulp.src("src/fonts/**/*").pipe(gulp.dest("dist/fonts"));
});

gulp.task("icons", function () {
    return gulp.src("src/icons/**/*").pipe(gulp.dest("dist/icons"));
});

gulp.task("images", function () {
    return gulp.src("src/images/*").pipe(imagemin()).pipe(gulp.dest("dist/images"));
});

// gulp.task("videos", function () {
//     return gulp.src("src/videos/*").pipe(gulp.dest("dist/videos"));
// });

gulp.task(
    "default",
    gulp.parallel(
        "watch",
        "server",
        "html",
        "styles",
        "fonts",
        "icons",
        "scripts",
        "images"
        // "videos"
    )
);
