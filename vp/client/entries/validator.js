import { createForm, Toast, q } from 'vanilla-jui';
import { t } from 'vanilla-signal-i18n';

const locales = {
    zh: {
        email: '邮箱',
        emailInvalid: '请输入正确的邮箱格式',
        emailPlaceholder: '请输入邮箱',
        emailRequired: '邮箱不能为空',
        password: '密码',
        passwordConfirm: '确认密码',
        passwordConfirmPlaceholder: '请确认密码',
        passwordConfirmRequired: '确认密码不能为空',
        passwordMax: '密码长度不能大于 12 位',
        passwordMin: '密码长度不能小于 6 位',
        passwordMismatch: '两次输入密码不一致',
        passwordPlaceholder: '请输入密码',
        passwordRequired: '密码不能为空',
        submitSuccess: 'Bingo! 表单验证成功',
    },
    en: {
        email: 'Email',
        emailInvalid: 'Please enter a valid email address',
        emailPlaceholder: 'Enter email',
        emailRequired: 'Email is required',
        password: 'Password',
        passwordConfirm: 'Confirm Password',
        passwordConfirmPlaceholder: 'Confirm password',
        passwordConfirmRequired: 'Confirm password is required',
        passwordMax: 'Password length cannot be greater than 12 characters',
        passwordMin: 'Password length cannot be less than 6 characters',
        passwordMismatch: 'The two passwords do not match',
        passwordPlaceholder: 'Enter password',
        passwordRequired: 'Password is required',
        submitSuccess: 'Bingo! Form validation succeeded',
    },
};
const translate = (k) => t(k, locales);

createForm({
    fields: [
        {
            type: 'email',
            payload: {
                label: translate('email'),
                name: 'email',
                required: true,
                placeholder: translate('emailPlaceholder'),
            }
        },
        {
            type: 'password',
            payload: {
                label: translate('password'),
                name: 'password',
                required: true,
                placeholder: translate('passwordPlaceholder'),
            }
        },
        {
            type: 'password',
            payload: {
                label: translate('passwordConfirm'),
                name: 'confirmPassword',
                required: true,
                placeholder: translate('passwordConfirmPlaceholder'),
            }
        }
    ],
    validator: {
        rules: {
            email: {
                required: true,
                email: true,
            },
            password: {
                required: true,
                minLength: 6,
                maxLength: 12,
            },
            confirmPassword: {
                required: true,
                equalTo: 'password',
            },
        },
        messages: {
            email: {
                required: translate('emailRequired'),
                email: translate('emailInvalid'),
            },
            password: {
                required: translate('passwordRequired'),
                minLength: translate('passwordMin'),
                maxLength: translate('passwordMax'),
            },
            confirmPassword: {
                required: translate('passwordConfirmRequired'),
                equalTo: translate('passwordMismatch'),
            },
        },
    },
    onSubmit: (data) => {
        Toast.success(translate('submitSuccess'));
        console.table(data);
    },
    style: 'max-width: 280px',
    buttonsPosition: 'start'
}).mount(q('.demo'));
