import React from 'react'
import {getMovieImageUrl} from '../Api/movieApi'

import { View, Image, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class FilmItem extends React.Component {
    render() {
        const { films, displayFilmDetails } = this.props
       // console.log(displayFilmDetails)
        return (
            <TouchableOpacity style={styles.container} onPress={()=>displayFilmDetails(films.id)}>
                <Image style={styles.image} source={{uri:getMovieImageUrl(films.poster_path)}}>

                </Image>
                <View style={styles.container_1}>
                    <View style={styles.container_2}>
                        <Text style={styles.titre}> {films.title}</Text>
                        <Text style={styles.vote}> {films.vote_average} </Text>

                    </View>
                    <View style={styles.container_3}>
                        <Text style={styles.description} numberOfLines={3}>{films.overview} </Text>
                        <Text style={styles.date}> {films.release_date} </Text>
                    </View>


                </View>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    image: {
        backgroundColor: '#000',
        flex: 1

    },
    titre: {

        fontWeight: 'bold',
        flex: 4
    },
    container: {
        marginTop: 5,
        height: 100,
        flex: 1,
        flexDirection: 'row'
    },

    container_1: {

        flex: 3,
        flexDirection: 'column'

    },
    container_2: {

        flex: 1,
        flexDirection: 'row'

    },
    container_3: {
        padding:2,
        flex: 4,
        flexDirection: 'column'

    },
    date: {

        flex: 1,
        alignSelf: 'flex-end',

        textAlign: 'right',



    },

    vote: {

        alignSelf: 'flex-end',
        textAlign: 'right',

        flex: 1

    },
    description: {

        flex: 3,
        overflow: 'hidden'


    }

})