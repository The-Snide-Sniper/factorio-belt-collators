/*
 * Hello fellow redditor who has decided to collaborate with me!
 * Feel free to rename this file, move it wherever it's convenient, add JQuery, etc.
 * All of the front-end stuff is up to you, I'm terrible at front-end code.
 * I'll be making a single backend function, specified below.
 */

const GeneratorStyle = {
    FRONT_TO_BACK: 0,       // Start with the organized belts and collate the outputs.
    BACK_TO_FRONT: 1,       // Start with the collated belts and organize the inputs.
    TENDRILS: 2             // The style that I made by hand in the Reddit post.
}

/**
 * Generates a blueprint string from the given parameters.
 * @param icons The desired icons for the blueprint, as a JS array in the format used by Factorio.
 * @param cycle The order that the collated belts should have, from left to right,
 * 				expressed as their internal names. Duplicates may be present.
 * @param incomingOrder The order that the uncollated belts come in, from left to right,
 * 						expressed as their internal names. Duplicates should not be present.
 * @param numCycles How many times the output belts should repeat.
 * @param style Which style should be used 
 * @return The blueprint string to display to the user.
 */
function makeBlueprint(icons, cycle, incomingOrder, numCycles, style) {
    // TODO
}
