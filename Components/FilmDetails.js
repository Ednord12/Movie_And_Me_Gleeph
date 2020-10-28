import React from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { getMovieDetails, getMovieImageUrl } from '../Api/movieApi'
import { Text, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
export default class FilmsDetails extends React.Component {
    constructor(props) {
        super(props)
        this.filmId = this.props.route.params.filmId
        this.film = undefined
        this.state = {
            isLoading: false,
            film: undefined
        }
        //this.filmId=this.props.

        //console.log(this.props.route.params.filmId)

    }
    componentDidMount() {

        getMovieDetails(this.filmId).then(data => {

            this.setState({
                isLoading: false,
                film: data,

            })

        })
    }
    render() {
        return (
            <View style={styles.container}>
                {this.displayFilmDetails()}

                <ActivityIndicator style={styles.activityIndicator, { opacity: this.state.isLoading ? 1 : 0, }} size='large' color="#123123" />
            </View>
        )
    }


    getGenres(genress) {
        let genres = ""
        for (const comp of genress) {
            genres += '/' + comp.name
        }
        console.log(genress)
        return genres
    }
    displayFilmDetails() {
        console.log('***************************************************')
        this.film = this.state.film
        //console.log(this.film)

        if (this.film != undefined) {

            return (
                <ScrollView style={styles.ScrollView}>
                    <Image style={styles.image} source={{ uri: getMovieImageUrl(this.film.backdrop_path) }} />
                    <Text style={styles.title}>{this.film.title}</Text>
                    <Text style={styles.description}>{this.film.overview}</Text>
                    <View style={{ padding: 5 }}>
                        <Text style={styles.info}>Sortie le {this.film.release_date}</Text>
                        <Text style={styles.info}>Note {this.film.vote_average}</Text>
                        <Text style={styles.info}>Nombre de votes: {this.film.vote_count}</Text>
                        <Text style={styles.info}>Budget: {this.film.budget}</Text>
                        <Text style={styles.info}>Genre(s) : {this.getGenres(this.film.genres)}</Text>
                        <Text style={styles.info}>Compagnie(s) : {this.film.production_companies.map(companie=>{return companie.name }).join('/')}</Text>

                    </View>


                </ScrollView>
            )
        }
    }
}


const styles = StyleSheet.create({

    ScrollView: {
        flex: 1
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1

    },
    activityIndicator: {

        position: 'absolute'

    },
    image: {
        padding: 2,
        height: 250,

    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        justifyContent: 'center',
        textAlign: 'center',
        marginVertical: 10

    },
    info: {
        fontWeight: 'bold'
    },
    description: {
        padding: 5
    }
})
