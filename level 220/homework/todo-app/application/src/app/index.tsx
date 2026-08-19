import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fontSize, layout, radius, spacing } from '../theme';

export default function App() {
	return (
		<View style={styles.screen}>
			<View style={styles.content}>
				<Text style={styles.title}>Todo</Text>
				<Text style={styles.subtitle}>
					A simple place to keep track of what you need to do.
				</Text>

				<Link href={"tasks"} style={styles.link}>
					Open tasks
				</Link>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: colors.background,
		justifyContent: 'center',
	},
	content: {
		width: '100%',
		maxWidth: layout.maxWidth,
		alignSelf: 'center',
		paddingHorizontal: spacing.lg,
	},
	title: {
		fontSize: fontSize.xxl,
		fontWeight: '700',
		color: colors.text,
	},
	subtitle: {
		marginTop: spacing.sm,
		fontSize: fontSize.md,
		lineHeight: 22,
		color: colors.muted,
	},
	link: {
		marginTop: spacing.xl,
		height: layout.controlHeight,
		lineHeight: layout.controlHeight,
		textAlign: 'center',
		backgroundColor: colors.primary,
		color: colors.primaryText,
		fontSize: fontSize.md,
		fontWeight: '600',
		borderRadius: radius.md,
		overflow: 'hidden',
	},
});
