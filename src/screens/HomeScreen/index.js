import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import Icon from 'react-native-vector-icons/Feather';
import { View, Text, FlatList, Image, Linking } from 'react-native';

import { styles } from "./index.styles";
import backgroundImage from "../../../assets/images/homepage-banner.png";
import howItWorks from "../../../assets/images/how_it_works.png";
import { selectServices } from "../../redux/services/selectors";
import { getServices } from "../../redux/services/actions";
import MenuIcon from "../../components/common/MenuIcon";
import Logo from "../../components/common/Logo";
import ServiceCard from "../../components/cards/ServiceCard";
import ScreenContainer from "../../components/common/ScreenContainer";

const HomeScreen = props => {

    const { selectServices, d__getServices, navigation, route } = props;

    const renderCard = data => {
        return <ServiceCard navigation={navigation} item={data.item} />
    }

    useEffect(() => {
        if (!selectServices.length) {
            d__getServices();
        }
    }, []);

    return (
        <ScreenContainer style={styles.container} showsVerticalScrollIndicator={false}>
            <Image
                source={backgroundImage}
                style={styles.backgroundImage}
                imageStyle={{
                    resizeMode: "cover",
                    alignSelf: "flex-end"
                }}
            />
            <View style={styles.addService}>
                <Icon.Button
                    color="#03D269"
                    backgroundColor="white"
                    borderRadius={50}
                    iconStyle={{ marginRight: 15 }}
                >
                    <View>
                        <Text
                            onPress={() => { }}
                            style={styles.callNumber}
                        >
                            Add Your Services
                        </Text>
                    </View>
                </Icon.Button>
            </View>
            <Text style={styles.or}>Or</Text>
            <View style={styles.contactUs}>
                <Icon.Button
                    name="phone-call"
                    size={30}
                    color="#03D269"
                    backgroundColor="white"
                    borderRadius={50}
                    iconStyle={{ marginRight: 15, marginLeft: 10 }}
                >
                    <View>
                        <Text
                            onPress={() => Linking.openURL('tel:+918010614314')}
                            style={styles.callNumber}
                        >
                            8010614314
                        </Text>
                    </View>
                </Icon.Button>
            </View>
            <View elevation={5} style={styles.serviceContainer}>
                <View style={styles.selectServiceHeader}>
                    <Text style={styles.header}>Select Service</Text>
                </View>
                <View style={styles.services}>
                    <FlatList
                        keyExtractor={item => item.SERVICE_TYPE_ID.toString()}
                        numColumns={3}
                        data={selectServices}
                        renderItem={renderCard}
                    />
                </View>
            </View>
            <View>
                <Image
                    source={howItWorks}
                    style={styles.howItWorks}
                    imageStyle={{
                        alignSelf: "flex-end"
                    }}
                />
            </View>
        </ScreenContainer>
    )
}

export const HomeOptions = ({ navigation }) => {
    return {
        headerTitle: <Logo />,
        headerLeft: () => <MenuIcon navigation={navigation} />,
    }
}

const mapStateToProps = createStructuredSelector({
    selectServices
})

const mapDispatchToProps = dispatch => {
    return {
        d__getServices: () => dispatch(getServices.request()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);