extern crate image;
extern crate lodepng;
extern crate rgb;
extern crate image_base64;
extern crate serde_json;
#[macro_use]
extern crate serde_derive;
extern crate serde;

use std::env;
use std::fs;
use std::fs::File;
use std::io::prelude::*;
use std::path::Path;
use std::error::Error;
use rgb::*;
use image::GenericImageView;
use serde::{Deserialize, Serialize};
use serde_json::Result;

#[derive(Serialize, Deserialize)]
struct ThumbVec {
    pic : Vec<String>,
}
#[derive(Serialize, Deserialize)]
struct Pic {
    data : String,
}

fn main() {
    let mut files = Vec::new();
    let mut images = Vec::new();
    let mut thumbnails = Vec::new();
    let mut resizeimages = Vec::new();
    let pathstr: Vec<String> = env::args().collect();
    //make result folder
    let re_path = format!("{}{}", pathstr[1],"/result");
    make_folder_resule(&re_path);
    //make file list png
    let path = Path::new(&pathstr[1]);
    for entry in fs::read_dir(path).expect("Not found Directory") {
        let entry = entry.expect("unable get files");
        if entry.path().is_file() {
            if entry.path().extension().unwrap() == "png" {
                println!("{:?}",entry.path().display());
                files.push(entry);
            }
        }
    };
    //
    images = load_image(&files);
    thumbnails = resize_image(images.clone(), 30, 20);
    resizeimages = resize_image(images.clone(), 450, 300);
    //
    save_pic(thumbnails, &re_path, "thumb_".to_string());
    save_pic(resizeimages, &re_path, "pic_".to_string());
    //
    json_parse(&re_path);
    //println!("{:?}", &files);
}

fn make_folder_resule(path: &String) {
    fs::create_dir_all(&path).expect("makeFail fail");
}

pub fn load_image (files: &Vec<fs::DirEntry>) -> Vec<image::DynamicImage> {
    let mut dis: Vec<image::DynamicImage> = Vec::new();
    for file in files.iter() {
        let di = image::open(&file.path()).unwrap();
        dis.push(di);
    }
    dis
}

pub fn save_pic (images: Vec<image::DynamicImage>, path: &String, name: String) {
    let mut i = 0;
    for img in images.iter() {
        let f = format!("{}/{}{}.{}",&path, &name, i.to_string(), "png");
        //println!("{:?}",f);
        img.save(f).unwrap();
        i += 1;
    }
}

pub fn resize_image (dy_imgs: Vec<image::DynamicImage>, width: u32, height: u32) -> Vec<image::DynamicImage>  {
    let mut r_imgs: Vec<image::DynamicImage> = Vec::new();
    for img in dy_imgs {
        let r_img = image::DynamicImage::resize(&img, width, height, image::Lanczos3);
        r_imgs.push(r_img);
    }
    r_imgs
}

pub fn json_parse (_path: &String)  {

    let base64_add = "data:image/jpeg;base64,";
    let mut thumbv: Vec<String> = Vec::new();

    let path = Path::new(&_path);

    for entry in fs::read_dir(path.clone()).expect("Not found Directory") {
        let entry = entry.expect("unable get files");
        if entry.path().is_file() {
            if entry.path().extension().unwrap() == "png" {
                //println!("{:?}",&entry.path().display());
                let image_path = &entry.path().display().to_string();
                if image_path.clone().contains("thumb") {
                    let base64 = image_base64::to_base64(&image_path.to_string()); 
                    thumbv.push(base64[22..].to_string());
                    //println!("{:?}", base64);
                }
            }
        }
    };
    let tv =  ThumbVec {
        pic: thumbv.clone(),
    };
    let json_t = serde_json::to_string(&tv).unwrap();
    savefilef(&format!("{}/{}.json",_path,"data"), &json_t);

    for entry in fs::read_dir(path.clone()).expect("Not found Directory") {
        let entry = entry.expect("unable get files");
        if entry.path().is_file() {
            if entry.path().extension().unwrap() == "png" {
                //println!("{:?}",&entry.path().display());
                let image_path = &entry.path().display().to_string();
                if image_path.clone().contains("pic") {
                    let base64 = image_base64::to_base64(&image_path.to_string()); 
                    match &entry.path().file_name() {
                        Some(file_name) => {
                            let s = file_name.to_str().unwrap();
                            let mut idx_str: Vec<String> = vec![];
                            for (i, c) in s.chars().enumerate() {
                                if c.is_digit(10) {
                                    idx_str.push(c.to_string());
                                }
                            }
                            let idx = idx_str.join("").parse::<usize>().unwrap();
                            let picfilename = &thumbv[idx][60..90];
                            let pic = Pic {
                                data : base64[22..].to_string(),
                            };
                            let json_p = serde_json::to_string(&pic).unwrap();
                            savefilef(&format!("{}/{}.json",_path,picfilename), &json_p);
                        },
                        _ => {
                            panic!("WTFFFFF");
                        },
                    };
                }
            }
        }
    };
}

fn savefilef (filename:&String, content:&String) {
    let path = Path::new(&filename);
    let display = path.display();
    let strings = &content;
    let mut file = match File::create(&path) {
    Err(e) => panic!("couldn't create {}:{}",
                        display,
                        e.description()),
    Ok(file) => file,
    };

    match file.write_all(strings.as_bytes()) {
        Err(e) => {
            panic!("couldn't write to {}: {}", display,
                                               e.description())
        },
        Ok(_) => println!("successfully wrote to {}", display),
    }
}
