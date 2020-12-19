import React, { useContext } from 'react';
import { View, ScrollView, FlatList, Image, Pressable, StyleSheet } from 'react-native';
import { Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { SimpleHeader } from '#/components/headers';
import { Featured, StoryCard } from '#/components/home';
import { Creator, Text, NotConnected } from '#/components';
import { AppContext } from '#/context';
import { measure, theme, themeMode, font } from '#/config';
import MediumSymbol from '../../../assets/medium-symbol.svg';
import { stories, creators } from '#/database';
import { greetings } from '#/utils';


const storyTags = stories.reduce((tags, story) => {
	story.tags.map(tag => {
		if (!tags[tag]) {
			tags[tag] = []
		}
		tags[tag].push(story)
	})
	return tags
}, {});

const data = Array(9).fill().map((_, i) => i)

function Home ({navigation: {navigate}}) {
	const {state: {darkMode, connection}} = useContext(AppContext);
	const colorMode = themeMode[darkMode];
	const { foreground, background } = theme[colorMode].colors;


	return (
		<View>
			<ScrollView>
				{/* HEADER */}
				<SimpleHeader
					style={{
						justifyContent: 'space-between',
						paddingHorizontal: measure.s + measure.xs,
						borderBottomWidth: 0
					}}
				>
					<View style={styles.header}>
						<MediumSymbol width={lsz} height={styles.logo.height} fill={foreground.primary}/>
						<Text
							type='title'
							style={{
								color: foreground.primary,
								fontSize: 15,
								marginLeft: measure.xs
							}}
						>
							{`Good ${greetings()}`}
						</Text>
					</View>
					<View style={{alignItems: 'center', flexDirection: 'row'}}>
						<Pressable
							onPress={() => navigate('reading_list')}
							style={styles.icon}
						>
							<MaterialCommunityIcons
								name="bookmark-multiple-outline"
								size={25}
								color={foreground.secondary}
							/>
						</Pressable>
						<Pressable
							onPress={() => navigate('search')}
							style={styles.icon}
						>
							<Ionicons
								name="md-search"
								size={25}
								color={foreground.secondary}
							/>
						</Pressable>
					</View>
				</SimpleHeader>
				{
					!connection.isConnected ? (
						<NotConnected text='your home screen' isDarkMode={darkMode}/>
					) : (
						<View>
							{/* FEATURED STORY */}
							<Featured
								story={stories[0]}
								creator={creators[stories[0].creator]}
								colorMode={colorMode}
								style={{
									borderBottomColor: background.secondary,
									...styles.underlined
								}}
							/>

							{/* SUGGESTED CREATORS TO FOLLOW */}
							<View
								style={[
									styles.section,
									styles.underlined,
									{ borderBottomColor: background.secondary }
								]}
							>
								<Text
									style={[
										{color: foreground.primary},
										styles.sectionTitle
									]}
								>
									who to follow
								</Text>
								<FlatList
									horizontal
									showsHorizontalScrollIndicator={false}
									data={data}
									renderItem={({item: i}) => (
										<Creator
											// key={item}
											size='large'
											colorMode={colorMode}
											style={{
												width: 135,
												marginRight: measure.s + (
													i === data.length - 1 ?
													measure.s :
													measure.xs
												),
												marginLeft: !i ? padH : 0,
											}}
											{...creators.tds}
										/>
									)}
									keyExtractor={item => item+''}
								/>
							</View>

							{/* DAILY READ */}
							<View
								style={[
									styles.section,
									styles.underlined,
									{
										borderBottomColor: background.secondary,
										paddingBottom: measure.s
									}
								]}
							>
								<View>
									{/*<Image/> icon*/}
									<Text
										style={[
											{color: foreground.primary},
											styles.sectionTitle
										]}
									>
										Your daily read
									</Text>
								</View>
								<View style={{paddingHorizontal: padH}}>
									{
										storyTags['daily-read'].slice(0, 5).map(item => (
											<StoryCard
												story={item}
												creator={creators[item.creator]}
												showCover
												colorMode={colorMode}
												style={{marginVertical: measure.xs}}
												key={item.id}
											/>
										))
									}
								</View>
							</View>

							<View
								style={[
									styles.section,
									styles.underlined,
									{ borderBottomColor: background.secondary }
								]}
							>
								<Text
									style={[
										styles.sectionTitle,
										{
											color: foreground.primary,
											marginBottom: 0
										}
									]}
								>
									building blocks
								</Text>
								<Text
									style={[
										styles.sectionSubtitle,
										{ color: foreground.primary }
									]}
								>
									Insight into what it takes to make a company
								</Text>
								<FlatList
									horizontal
									showsHorizontalScrollIndicator={false}
									data={data}
									renderItem={({item: i}) => (
										<Creator
											// key={item}
											size='large'
											colorMode={colorMode}
											isSuggestion={false}
											style={{
												width: 135,
												marginRight: measure.s + (i === data.length - 1 ? measure.s : measure.xs),
												marginLeft: !i ? padH : 0,
											}}
											{...creators.tds}
										/>
									)}
									keyExtractor={item => item+''}
								/>
							</View>

							{/* OUR READ */}
							<View
								style={[
									styles.section,
									styles.underlined,
									{
										backgroundColor: background.secondary,
										borderBottomColor: background.secondary,
									}
								]}
							>
								<Text
									style={[
										styles.superTitle,
										{color: foreground.primary}
									]}
								>
									What we're reading today
								</Text>
								<Text
									style={{
										color: foreground.secondary,
										marginLeft: padH,
										marginVertical: measure.xs
									}}
								>
									Highlights from all corners of Medium
								</Text>
								<FlatList
									horizontal
									showsHorizontalScrollIndicator={false}
									data={storyTags['our-read']}
									keyExtractor={item => item.id}
									renderItem={({item, index: i}) => (
										<StoryCard
											orientation='vertical'
											showCover
											story={item}
											creator={creators[item.creator]}
											creatorStyle={{marginVertical: measure.xs}}
											colorMode={colorMode}
											style={{
												// width: 135,
												marginRight: measure.s + (
													i === storyTags['our-read'].length - 1 ?
													measure.s :
													measure.xs
												),
												marginLeft: !i ? padH : 0,
												marginTop: measure.s,
											}}
											key={item.id}
										/>
									)}
								/>
							</View>

							{/* EDUCATORS */}
							<View
								style={[
									styles.section,
									styles.underlined,
									{
										borderBottomColor: background.secondary,
									}
								]}
							>
								<Text
									style={[
										styles.sectionTitle,
										{
											color: foreground.primary,
											marginBottom: 0
										}
									]}
								>
									The educators
								</Text>
								<Text
									style={[
										styles.sectionSubtitle,
										{ color: foreground.primary }
									]}
								>
									Teachers and professors on Medium
								</Text>
								<FlatList
									horizontal
									showsHorizontalScrollIndicator={false}
									data={data}
									renderItem={({item: i}) => (
										<Creator
											// key={item}
											size='large'
											colorMode={colorMode}
											isSuggestion={false}
											style={{
												width: 135,
												marginRight: measure.s + (i === data.length - 1 ? measure.s : measure.xs),
												marginLeft: !i ? padH : 0,
											}}
											{...creators.tds}
										/>
									)}
									keyExtractor={item => item+''}
								/>
							</View>

							{/* TRENDING */}
							<View
								style={[
									styles.section,
									styles.underlined,
									{
										borderBottomColor: background.secondary,
										paddingBottom: measure.s
									}
								]}
							>
								<View
									style={[
										styles.row,
										{
											marginLeft: padH,
											marginBottom: measure.s,
										}
									]}
								>
									<Feather name="trending-up" size={20} color={foreground.primary} />
									<Text
										style={[
											styles.sectionTitle,
											{
												color: foreground.primary,
												marginBottom: 0,
												marginTop: 0,
												marginLeft: measure.xs + 3,
												textAlignVertical: 'center'
											}
										]}
									>
										Trending on Medium
									</Text>
								</View>
								<View style={{paddingHorizontal: padH}}>
									{
										storyTags['trending'].slice(0, 5).map((item, i) => (
											<StoryCard
												story={item}
												marker={(i < 10 ? '0' : '') + (i + 1)}
												creator={creators[item.creator]}
												colorMode={colorMode}
												style={{marginVertical: measure.xs * 2}}
												key={item.id}
											/>
										))
									}
								</View>
							</View>
						</View>
					)
				}
			</ScrollView>
		</View>
	)
};

const lsz = 35;
const padH = measure.s * 2 - 10

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		alignItems: 'center'
	},

	logo: {
		height: Math.ceil(lsz / 3) * 2,
		width: lsz,
		resizeMode: 'contain',
	},

	section: {
		paddingVertical: measure.s,
		paddingBottom: padH
	},

	sectionAlt: {

	},

	sectionTitle: {
		textTransform: 'uppercase',
		...font.title,
		fontSize: 13,
		marginLeft: padH,
		marginTop: measure.xs,
		marginBottom: measure.s,
	},

	sectionSubtitle: {
		marginLeft: padH,
		marginBottom: measure.s,
		marginTop: measure.xs
	},

	superTitle: {
		...font.title,
		fontSize: 29,
		marginLeft: padH,
	},

	underlined: {
		borderBottomWidth: 1,
	},

	row: {
		flexDirection: 'row',
		alignItems: 'center'
	},

	icon: {
		marginHorizontal: measure.xs * 2
	}
})

export default Home;
export {default as ReadingListNavigator} from './ReadingListNavigator';
export {default as Search} from './Search';
