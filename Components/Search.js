import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { searchMovie } from '../Api/movieApi'
import FilmsItem from './filmsItem'
import films from '../Helpers/films'
import { Text, FlatList, StyleSheet, Button, TextInput, View, ActivityIndicator } from 'react-native'
export default class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            film: [],
            isLoading: false
        }
        this.searchText = ''
        this.totalPage=0
        this.currentPage=0

    }  
    _displayFilmDetails=(id)=>{
            //console.log( this.props)
            this.props.navigation.navigate("FilmDetails",{filmId:id})
            
        }

    render() {
        //const films =[{'key':'a','kez':'d'}]
        return (
            <View>
                <StatusBar style="auto" />
                <TextInput style={styles.TextInput} onSubmitEditing={() => { this._loadFilms() }} placeholder='Titre du film' onChangeText={text => this.searchTextChanged(text)} />
                <Button style={styles.Button} title='Recherche' onPress={() => this._loadFilms()} />
                <FlatList
                onEndReachedThreshold={0.5}
                onEndReached={()=>this._search()}
                    data={this.state.film}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => <FilmsItem films={item}  displayFilmDetails={this._displayFilmDetails} />}
                />
                { this._displayLoader()}
            </View>
        )
    }
   
    _loadFilms()
    {
        console.log("loading....")
        if(this.searchText)
        this.setState({film:[]},()=>{
            this.currentPage=0
            this.totalPage=1
            this._search()

        })
    
    }
    _displayLoader() {
        if (this.state.isLoading) {
            return (
                <View  style={styles.loader}>
                    <ActivityIndicator size='large' color='#00ff00' />
                </View>)

        }
    }

    _search() {
        console.log(this.currentPage,this.totalPage)

        if(this.currentPage< this.totalPage){

            console.log("searching")
            this.setState({ isLoading: true })
            searchMovie(this.searchText,this.currentPage+1).then(data => {
                this.totalPage=data.total_pages
                this.currentPage=data.page
                this.setState({ film:this.state.film.concat(data.results) ,isLoading: false })
                //this.forceUpdate()
            })
        }
      
    
    }
    searchTextChanged(text) {
        this.searchText = text

    }
}
const styles = StyleSheet.create({
    TextInput: {
        height: 50,
        margin: 5,
        padding: 5,
        borderColor: '#000',
        borderWidth: 0.2
    },
    Button: {
        flex: 1,
        margin: 5,
    },
    loader: {
        backgroundColor:'#fff',
        position: 'absolute',
        left:0,
        right:0,
        bottom:0,
        top: 100,
        justifyContent:'center',
        alignItems:'center'
    }
})