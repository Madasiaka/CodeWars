/* Alan is known for referring to the temperature of the apple turnover as 'Hotter than the sun!'. According to space.com the temperature of the sun's corona is 2,000,000 degrees C, but we will ignore the science for now.

Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!', else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.

X will be a valid integer number.
X will be either a number or a string. Both are valid. */

//P: number or a number presented as a string
//R: string phrase provided: 'It's hotter than the sun!!' or 'Help yourself to a honeycomb Yorkie for the glovebox.'.
//E: apple(100) => 'It's hotter than the sun!!'
    //apple(20) =>'Help yourself to a honeycomb Yorkie for the glovebox.'.
    //apple("1000") => 'It's hotter than the sun!!'

function apple(x){
    //force convert x to a number, then square it, then compare to 1000
    return (Number(x) ** 2 >= 1000)? "It's hotter than the sun!!" : 'Help yourself to a honeycomb Yorkie for the glovebox.'
    }