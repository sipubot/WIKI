fn abbrev_name(name: &str) -> String {
    // code away
    let mut re: Vec<String> = vec![];
    for a in name.split_whitespace() {
        match a.chars().next()  {
            Some(x) => {
                re.push(x.to_string().to_uppercase());
            },
            None => {}
        }
    }
    re.join(".")   
}