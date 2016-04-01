$(document).ready(function() {
  $("#survey form").submit(function(event) {

    var q1Input=$("input:radio[name=q1]:checked").val();
    var q2Input=$("input:radio[name=q2]:checked").val();
    var q3Input=$("input:radio[name=q3]:checked").val();
    var q4Input=$("input:radio[name=q4]:checked").val();
    var q5Input=$("input:radio[name=q5]:checked").val();
    var q6Input=$("input:radio[name=q6]:checked").val();
    var q7Input=$("input:radio[name=q7]:checked").val();
    var q8Input=$("input:radio[name=q8]:checked").val();
    var q9Input=$("input:radio[name=q9]:checked").val();

    if(q1Input==="b" && q2Input==="b") {
      alert("Cindy Chandler");
    } else if(q1Input==="a" && q2Input==="b") {
      alert("Kate Austen");
    } else if(q1Input==="b" && q2Input==="a") {
      alert("Juliet Burke");
    } else if(q1Input==="a" && q3Input==="a") {
      alert("Mr. Eko");
    } else if(q1Input==="b" && q3Input==="a") {
      alert("Walter 'Walt' Lloyd");
    } else if(q2Input==="b" && q3Input==="a") {
      alert("John Locke");
    } else if(q6Input==="a" && q3Input==="a") {
      alert("Richard Alpert");
    } else if(q2Input==="a" && q3Input==="a") {
      alert("You are Christian Shephard");
    } else {
      alert("You are Vincent");
    }

    /*
    //q1 - arrested?
    Kate Austen
    Anna Lucia
    Michael Dawson
    Mr. Eko
    Nikki Fernandez
    James 'Sawyer' Ford
    Desmond David Hume
    Sayid Jarrah
    Jin-Soo Kwon
    Sun-Hwa Kwon
    Claire Littleton
    John Locke
    Chalrie Pace
    Paulo
    Hugo 'Hurley' Reyes
    Ethan Rom
    Charles Widmore
    Martin Keamy
    Anthony Cooper
    Cassidy Phillips

    //q2 - advanced training?
    Juliet Burke
    Daniel Faraday
    Sayid Jarrah
    Frank Lapidus
    Charlotte Staples lewis
    Jack Shephard
    Leslie Arzt
    Bernard Nadler
    Mikhail Bakunin
    Eloise Hawking
    Ethan Rom
    Pierre Chang
    Alvar Hanso

    //q4 - social life
    A: in-crowd
    Richard Alpert
    Juliet Burke
    Benjamin Linus
    Cindy Chandler
    Eloise Hawking
    Ethan Rom
    Goodwin Stanhope
    Leslie Arzt

    B: any crowd
    Boone Carlyle
    Hugo 'Hurley' Reyes
    Claire Littleton
    Frank Lapidus
    Chalrie Pace
    Jack Shephard
    Elizabeth 'Libby' Smith
    Alexandra Rousseau

    C: small group
    Kate Austen
    Anna Lucia
    Michael Dawson
    Daniel Faraday
    Nikki Fernandez
    Desmond David Hume
    Jin-Soo Kwon
    Sun-Hwa Kwon
    Charlotte Staples lewis

    D: loner
    James 'Sawyer' Ford
    John Locke
    The Man in Black
    Sayid Jarrah
    Mr. Eko
    Walter 'Walt' Lloyd
    Shannon Rutherford
    Miles Straume
    Ilana Verdansky
    Bernard Nadler
    Rose Henderson Nadler
    Vincent
    Jacob
    Mikhail Bakunin
    Horace Goodspeed
    Roger Linus

    //q5 - childhood/mother
    A: Happy Family
        Juliet Burke
        Sun-Hwa Kwon
        Jack Shephard

    B: Mother only
        Kate Austen
        Boone Carlyle
        Anna Lucia
        Claire Littleton
        Miles Straume

    C: Interrupted childhood
    Mr. Eko
    James 'Sawyer' Ford
    Charlotte Staples lewis
    Walter 'Walt' Lloyd
    Hugo 'Hurley' Reyes
    Shannon Rutherford

    D: Mother gone at birth
    Jin-Soo Kwon
    Benjamin Linus
    John Locke
    Alexandra Rousseau

    //q6 - God?
    A: yes
    Mr. Eko
    John Locke
    Jacob
    Eloise Hawking
    Richard Alpert
    Matthew Abaddon

    B: usually
    Chalrie Pace
    Claire Littleton
    Sayid Jarrah
    Ilana Verdansky
    Anthony Cooper

    C: not really
    James 'Sawyer' Ford
    Desmond David Hume
    Kate Austen
    Hugo 'Hurley' Reyes
    Juliet Burke

    D: never
    Daniel Faraday
    Benjamin Linus
    Miles Straume
    Jack Shephard
    Danielle Rousseau
    Naomi Dorrit
    Martin Keamy

    //q7 - voices?
    Richard Alpert
    Kate Austen
    Mr. Eko
    James 'Sawyer' Ford
    Walter 'Walt' Lloyd
    John Locke
    Hugo 'Hurley' Reyes
    Miles Straume
    Jacob

    //q8 - lead or follow?
    Lead:
    Anna Lucia
    James 'Sawyer' Ford
    Benjamin Linus
    Jack Shephard
    Ilana Verdansky
    Charles Widmore

    Follow:
    Richard Alpert
    Juliet Burke
    Boone Carlyle
    Chalrie Pace
    Ethan Rom
    Goodwin Stanhope

    Depends:
    Kate Austen
    Mr. Eko
    Hugo 'Hurley' Reyes
    Leslie Arzt

    //q9 - in a crisis?
    A: panic
    Shannon Rutherford

    B: save everyone
    Anna Lucia
    Boone Carlyle
    Kate Austen
    Chalrie Pace
    Jack Shephard

    C: save friends
    alert("Mr. Eko");
    alert("Juliet Burke");
    alert("John Locke");
    alert("Hugo 'Hurley' Reyes");
    alert("Karl Martin");
    alert("Martin Keamy");
    alert("Sayid Jarrah");
    alert("Frank Lapidus");

    D: run and hide/save self
    alert("James 'Sawyer' Ford");
    alert("Benjamin Linus");
    alert("Danielle Rousseau");

    */


  });
});
