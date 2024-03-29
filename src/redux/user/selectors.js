import { createSelector } from "reselect";
import { get as _get } from "lodash";

export const selectUsers = state => state.users;

export const selectIsAuthFetching = createSelector(
    [selectUsers],
    val => _get(val, 'auth.isFetching'),
);

export const selectIsAuth = createSelector(
    [selectUsers],
    val => _get(val, 'auth.isAuthenticated'),
);

export const selectThemePreference = createSelector(
    [selectUsers],
    val => _get(val, 'themePreference'),
);

export const selectLocalePreference = createSelector(
    [selectUsers],
    val => _get(val, 'localePreference'),
);

export const selectIsRefreshing = createSelector(
    [selectUsers],
    val => _get(val, 'auth.isRefreshing'),
);

export const selectLoggedInUser = createSelector(
    [selectUsers],
    val => _get(val, 'auth.loggedInUser')
)

export const selectIsOtpSent = createSelector(
    [selectUsers],
    val => _get(val, 'auth.isOtpSent')
)

export const selectIsOtpSending = createSelector(
    [selectUsers],
    val => _get(val, 'auth.isOtpSending', false)
)

export const selectIsLoggingIn = createSelector(
    [selectUsers],
    val => _get(val, 'auth.isLoggingIn', false)
)

export const selectIsAdmin = createSelector(
    [selectUsers],
    val => _get(val, 'auth.loggedInUser.role') === 'ADMIN'
)

export const selectShowLoginModal = createSelector(
    [selectUsers],
    val => _get(val, 'auth.showLoginModal', false)
)

export const selectUserProfile = createSelector(
    [selectUsers],
    val => _get(val, 'auth.profile', {})
)

export const selectUserServices = createSelector(
    [selectUsers],
    val => _get(val, 'services.data', [])
)

export const selectIsProfileFetching = createSelector(
    [selectUsers],
    val => _get(val, 'auth.isFetching', false)
)

export const selectIsServiceActing = createSelector(
    [selectUsers],
    val => _get(val, 'services.isSaving', false) || _get(val, 'services.isLoading', false)
)

export const selectIsUserServiceSaved = createSelector(
    [selectUsers],
    val => _get(val, 'services.isSaved', false)
)
