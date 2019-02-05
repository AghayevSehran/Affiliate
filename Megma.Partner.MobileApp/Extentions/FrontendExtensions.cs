using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;
using Megma.Partner.MobileApp.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using ZeroFormatter;

namespace Megma.Partner.MobileApp.Extentions
{
    public static class FrontendExtensions
    {
        private const int LowerCaseOffset = 'a' - 'A';

        public static JsonModel<T> CreateSuccess<T>(this Controller c, T data)
        {
            return new JsonModel<T>
            {
                Data = data,
                Status = JsonModelStatus.Ok
            };
        }

        public static JsonModel<T> CreateError<T>(this Controller c, string message)
        {
            return new JsonModel<T>
            {
                Status = JsonModelStatus.Error,
                Message = message
            };
        }

        public static bool IsUserLoggedIn(this Controller c)
        {
            return c.GetPartnerSession() != null;
        }

        public static PartnerLoginResponse GetPartnerSession(this Controller controller)
        {
            return controller.HttpContext.Session.Get<PartnerLoginResponse>("PartnerLogin");
        }

        public static PartnerLoginResponse GetPartnerSession(this ISession session)
        {
            return session.Get<PartnerLoginResponse>("PartnerLogin");
        }


      public static void ClearPartnerSession(this Controller controller)
      {
        controller.HttpContext.Session.Clear();
      }
    public static void SetPartnerSession(this Controller controller, PartnerLoginResponse data)
        {
            controller.HttpContext.Session.Set("PartnerLogin", data);
        }

        public static void ClearPlayerSession(this ISession session)
        {
            session.Set<PartnerLoginResponse>("PlayerLogin", null);
        }

        private static void Set<T>(this ISession session, string key, T value)
        {
            session.Set(key, ZeroFormatterSerializer.Serialize(value));
        }

        private static T Get<T>(this ISession session, string key)
        {
            byte[] sessionData;
            return session.TryGetValue(key, out sessionData) ? ZeroFormatterSerializer.Deserialize<T>(sessionData) : default(T);
        }

        public static string GenerateSlug(this string phrase)
        {
            var str = phrase.RemoveAccent().ToLower();
            // invalid chars           
            str = Regex.Replace(str, @"[^a-z0-9\s-]", "");
            // convert multiple spaces into one space   
            str = Regex.Replace(str, @"\s+", " ").Trim();
            // cut and trim 
            str = str.Substring(0, str.Length <= 45 ? str.Length : 45).Trim();
            str = Regex.Replace(str, @"\s", "-"); // hyphens   
            return str;
        }

        public static string RemoveAccent(this string txt)
        {
            var bytes = Encoding.GetEncoding("Cyrillic").GetBytes(txt);
            return Encoding.ASCII.GetString(bytes);
        }

        public static T FromJsont<T>(this string data)
        {
            return JsonConvert.DeserializeObject<T>(data);
        }

        public static string ToJson(this object data)
        {
            return JsonConvert.SerializeObject(data);
        }

        public static string FromUtf8Bytes(this byte[] bytes)
        {
            return bytes == null ? null : Encoding.UTF8.GetString(bytes, 0, bytes.Length);
        }

        public static byte[] ToUtf8Bytes(this string value)
        {
            return Encoding.UTF8.GetBytes(value);
        }

        public static string LeftPart(this string strVal, string needle)
        {
            if (strVal == null) return null;
            var pos = strVal.IndexOf(needle, StringComparison.OrdinalIgnoreCase);
            return pos == -1 ? strVal : strVal.Substring(0, pos);
        }

        public static string RightPart(this string strVal, char needle)
        {
            if (strVal == null) return null;
            var pos = strVal.IndexOf(needle);
            return pos == -1 ? strVal : strVal.Substring(pos + 1);
        }

        public static string RightPart(this string strVal, string needle)
        {
            if (strVal == null) return null;
            var pos = strVal.IndexOf(needle, StringComparison.OrdinalIgnoreCase);
            return pos == -1
                ? strVal
                : strVal.Substring(pos + needle.Length);
        }

        public static string LastLeftPart(this string strVal, char needle)
        {
            if (strVal == null) return null;
            var pos = strVal.LastIndexOf(needle);
            return pos == -1
                ? strVal
                : strVal.Substring(0, pos);
        }

        public static string LastLeftPart(this string strVal, string needle)
        {
            if (strVal == null) return null;
            var pos = strVal.LastIndexOf(needle, StringComparison.OrdinalIgnoreCase);
            return pos == -1
                ? strVal
                : strVal.Substring(0, pos);
        }

        public static string LastRightPart(this string strVal, char needle)
        {
            if (strVal == null) return null;
            var pos = strVal.LastIndexOf(needle);
            return pos == -1
                ? strVal
                : strVal.Substring(pos + 1);
        }

        public static string LastRightPart(this string strVal, string needle)
        {
            if (strVal == null) return null;
            var pos = strVal.LastIndexOf(needle, StringComparison.OrdinalIgnoreCase);
            return pos == -1
                ? strVal
                : strVal.Substring(pos + needle.Length);
        }

        public static string[] SplitOnFirst(this string strVal, char needle)
        {
            if (strVal == null) return new string[0];
            var pos = strVal.IndexOf(needle);
            return pos == -1
                ? new[] {strVal}
                : new[] {strVal.Substring(0, pos), strVal.Substring(pos + 1)};
        }

        public static string[] SplitOnFirst(this string strVal, string needle)
        {
            if (strVal == null) return new string[0];
            var pos = strVal.IndexOf(needle, StringComparison.OrdinalIgnoreCase);
            return pos == -1
                ? new[] {strVal}
                : new[] {strVal.Substring(0, pos), strVal.Substring(pos + needle.Length)};
        }

        public static string[] SplitOnLast(this string strVal, char needle)
        {
            if (strVal == null) return new string[0];
            var pos = strVal.LastIndexOf(needle);
            return pos == -1
                ? new[] {strVal}
                : new[] {strVal.Substring(0, pos), strVal.Substring(pos + 1)};
        }

        public static string[] SplitOnLast(this string strVal, string needle)
        {
            if (strVal == null) return new string[0];
            var pos = strVal.LastIndexOf(needle, StringComparison.OrdinalIgnoreCase);
            return pos == -1
                ? new[] {strVal}
                : new[] {strVal.Substring(0, pos), strVal.Substring(pos + needle.Length)};
        }

        public static string Format(this string text, params object[] args)
        {
            return string.Format(text, args);
        }

        public static string FormatWith(this string text, params object[] args)
        {
            return Format(text, args);
        }

        public static string Fmt(this string text, params object[] args)
        {
            return Format(text, args);
        }

        public static string Fmt(this string text, object arg1)
        {
            return Format(text, arg1);
        }

        public static string Fmt(this string text, object arg1, object arg2)
        {
            return Format(text, arg1, arg2);
        }

        public static string Fmt(this string text, object arg1, object arg2, object arg3)
        {
            return Format(text, arg1, arg2, arg3);
        }

        public static bool StartsWithIgnoreCase(this string text, string startsWith)
        {
            return text != null
                   && text.StartsWith(startsWith, StringComparison.Ordinal);
        }

        public static bool EndsWithIgnoreCase(this string text, string endsWith)
        {
            return text != null
                   && text.EndsWith(endsWith, StringComparison.Ordinal);
        }

        public static string ToCamelCase(this string value)
        {
            if (string.IsNullOrEmpty(value)) return value;

            var len = value.Length;
            var newValue = new char[len];
            var firstPart = true;

            for (var i = 0; i < len; ++i)
            {
                var c0 = value[i];
                var c1 = i < len - 1 ? value[i + 1] : 'A';
                var c0IsUpper = c0 >= 'A' && c0 <= 'Z';
                var c1IsUpper = c1 >= 'A' && c1 <= 'Z';

                if (firstPart && c0IsUpper && (c1IsUpper || i == 0))
                    c0 = (char) (c0 + LowerCaseOffset);
                else
                    firstPart = false;

                newValue[i] = c0;
            }

            return new string(newValue);
        }

        public static string ToPascalCase(this string value)
        {
            if (string.IsNullOrEmpty(value)) return value;

            if (value.IndexOf('_') >= 0)
            {
                var parts = value.Split('_');
                var sb = new StringBuilder();
                foreach (var part in parts)
                {
                    var str = part.ToCamelCase();
                    sb.Append(char.ToUpper(str[0]) + str.SafeSubstring(1, str.Length));
                }
                return sb.ToString();
            }

            var camelCase = value.ToCamelCase();
            return char.ToUpper(camelCase[0]) + camelCase.SafeSubstring(1, camelCase.Length);
        }

        public static string ToTitleCase(this string value)
        {
            var words = value.Split('_');

            for (var i = 0; i <= words.Length - 1; i++)
                if (!ReferenceEquals(words[i], string.Empty))
                {
                    var firstLetter = words[i].Substring(0, 1);
                    var rest = words[i].Substring(1);
                    var result = firstLetter.ToUpper() + rest.ToLower();
                    words[i] = result;
                }
            return string.Join("", words);
        }

        public static string ToLowercaseUnderscore(this string value)
        {
            if (string.IsNullOrEmpty(value)) return value;
            value = value.ToCamelCase();

            var sb = new StringBuilder();
            foreach (var t in value)
                if (char.IsDigit(t) || char.IsLetter(t) && char.IsLower(t) || t == '_')
                {
                    sb.Append(t);
                }
                else
                {
                    sb.Append("_");
                    sb.Append(char.ToLowerInvariant(t));
                }
            return sb.ToString();
        }

        public static string ToLowerSafe(this string value)
        {
            return value?.ToLower();
        }

        public static string ToUpperSafe(this string value)
        {
            return value?.ToUpper();
        }

        public static string SafeSubstring(this string value, int startIndex)
        {
            return SafeSubstring(value, startIndex, value.Length);
        }

        public static string SafeSubstring(this string value, int startIndex, int length)
        {
            if (string.IsNullOrEmpty(value)) return string.Empty;
            if (value.Length >= startIndex + length)
                return value.Substring(startIndex, length);

            return value.Length > startIndex ? value.Substring(startIndex) : string.Empty;
        }

        public static bool IsNullOrEmpty<T>(this List<T> list)
        {
            return list == null || list.Count == 0;
        }

        public static int NullableCount<T>(this List<T> list)
        {
            return list?.Count ?? 0;
        }

        public static void AddIfNotExists<T>(this List<T> list, T item)
        {
            if (!list.Contains(item))
                list.Add(item);
        }

        public static List<T> InList<T>(this T value)
        {
            return new List<T> {value};
        }

        public static T[] InArray<T>(this T value)
        {
            return new[] {value};
        }

        public static string TryFormat(this string val, params object[] p)
        {
            try
            {
                return string.Format(val, p);
            }
            catch
            {
                return val;
            }
        }

        public static bool IsNull(this object val)
        {
            return val == null;
        }

        public static bool IsNotNull(this object val)
        {
            return val != null;
        }

        public static string ParseMatchTimeExtended45Minute(this string s)
        {
            try
            {
                var splitString = s.Split('+');
                var minute = splitString[1].Split(':')[0];
                return "45+" + (int.Parse(minute) + 1);
            }
            catch
            {
                return s;
            }
        }

        public static string ParseMatchTimeExtended90Minute(this string s)
        {
            try
            {
                var splitString = s.Split('+');
                var minute = splitString[1].Split(':')[0];
                if (minute != "89")
                    return "90+" + (int.Parse(minute) + 1);
                return "90";
            }
            catch
            {
                return s;
            }
        }
    }
}